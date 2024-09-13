<?php

namespace App\Http\Controllers;

use App\Models\Promo;
use Illuminate\Http\Request;

class PromoController extends Controller
{
    public function viewPromo(){
        $promo = Promo::orderby('created_at', 'DESC')->paginate(10);
        return view('admin.promo.Promo', compact('promo'));
    }

    public function viewPromoAdd(){
        return view('admin.promo.PromoAdd');
    }

    public function store(Request $request){
        try{

            $request->validate([
                'judul' => 'required|string|max:255',
                'penulis' => 'required|string|max:10000',
                'keterangan' => 'required|string|max:100000',
                'kategory' => 'required|string|max:255',
                'tanggal' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $promo = new Promo();
            $promo->judul = $request->judul;
            $promo->penulis = $request->penulis;
            $promo->keterangan = $request->keterangan;
            $promo->kategory = $request->kategory;
            $promo->tanggal = $request->tanggal;

            if($request->hasFile('image')){
                $imageData = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/promo'), $imageData);
                $promo->image = $imageData;
            }

            $promo->save();

            return redirect()->route('promo.index')->with('success', 'Data Promo Berhasil Di Unggah');
        } catch(\Exception $e){
            return back()->with('error', 'Data Promo Gagal Di Unggah ' . $e->getMessage());
        }
    }
}
