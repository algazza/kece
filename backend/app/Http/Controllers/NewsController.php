<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
                'keterangan_singkat' => 'required|string|max:10000',
                'keterangan' => 'required|string|max:100000',
                'kategory' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $news = new News();
            $news->judul = $request->judul;
            $news->keterangan_singkat = $request->keterangan_singkat;
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
}
