<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{

    function viewNewsAdd(){
        return view ('admin.news.NewsAdd');
    }

    function store(Request $request){
        $request->validate([
            'judul' => 'required|string|max:255',
            'keterangan_singkat' => 'required|string|max:255',
            'keterangan' => 'required|string',
            'kategory' => 'required|string|max:255',
        ]);
    
        $news = new News();
        $news->judul = $request->judul;
        $news->keterangan_singkat = $request->keterangan_singkat;
        $news->keterangan = $request->keterangan;
        $news->kategory = $request->kategory;
        
        $news->save();
    
        return response()->json(['message' => 'News created successfully'], 201);
    }


    function index()
    {
        $news = News::orderBy('created_at', 'desc')->get();
        return response()->json($news);
    }
}
