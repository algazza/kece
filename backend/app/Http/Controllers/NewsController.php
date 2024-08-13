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


    function index()
    {
        $news = News::orderBy('created_at', 'desc')->get();
        return response()->json($news);
    }


    public function show($id)
    {
        try {
            // Menggunakan findOrFail untuk mengambil berita berdasarkan ID
            $news = News::findOrFail($id);
            
            return response()->json($news);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Berita tidak ditemukan.'], 404);
        }
    }
}
