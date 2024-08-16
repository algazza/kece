<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class NewsController extends Controller
{

    function viewNewsAdd(){
        return view ('admin.news.NewsAdd');
    }

    public function viewNews(Request $request) {
        $search = $request->input('search');
        $filter = $request->input('filter');
    
        $query = News::query()->orderBy('created_at', 'DESC');
        
        if ($search) {
            $query->where('judul', 'LIKE', "%{$search}%");
        }
        
        if ($filter) {
            $query->where('kategory', $filter);
        }
        
        $news = $query->paginate(10);
        
        return view('admin.news.News', compact('news'));
    }
    
    

    function editNews($id){
        $news = News::find($id);

        if(!$news){
            return redirect()->route('news')->with('eror','tidak di temukan');
        };

        return view('admin.news.NewsEdit', compact('news'));
    }

    function updateNews(Request $request, $id){

        $news = News::find($id);

        $validateData = $request->validate([
            'judul' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'kategory' => 'required|string|max:255',
            'keterangan' => 'required|string',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();  
            $request->image->move(public_path('image/public/news'), $imageName);
            $validateData['image'] = $imageName;
        } else {
            if (!isset($validateData['image'])) {
                $validateData['image'] = $news->image;
            }
        }

        if(!$news){
            return redirect()->route('news')->with('eror','tidak di temukan');
        };

        $news->update($validateData);

        return redirect()->route('news')->with('success', 'News updated successfully');
    }


    function destroyNews($id){
        $news = News::find($id);

        if(!$news){
            return redirect()->route('news')->with('eror','tidak di temukan');
        }

        $news->delete();

        return redirect()->route('news')->with('success', 'News deleted successfully');
    }



    // JSON DATA API

    function index()
    {
        $news = News::orderBy('created_at', 'desc')->get();
        return response()->json($news);
    }


    function store(Request $request)
    {
        try {
            $request->validate([
                'judul' => 'required|string|max:255',
                'penulis' => 'required|string|max:10000',
                'keterangan' => 'required|string|max:100000',
                'kategory' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $news = new News();
            $news->judul = $request->judul;
            $news->penulis = $request->penulis;
            $news->keterangan = $request->keterangan;
            $news->kategory = $request->kategory;
            
            if ($request->hasFile('image')) {
                $imageName = time() . '.' . $request->image->extension();  
                $request->image->move(public_path('image/public/news'), $imageName);
                $news->image = $imageName;
            } else {
                $news->image = 'profil.jpg';
            }

            $news->save();

            return redirect()->route('news.form')->with('success', 'Berita berhasil ditambahkan.');
        } catch (\Exception $e) {
            Log::error('Error adding news: ' . $e->getMessage());
            return redirect()->route('news.form')->with('error', 'Terjadi kesalahan saat menambahkan berita.');
        }
    }

    public function show($id)
    {
        try {
            $news = News::findOrFail($id);
            
            return response()->json($news);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Berita tidak ditemukan.'], 404);
        }
    }
}
