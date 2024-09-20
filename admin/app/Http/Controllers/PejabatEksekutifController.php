<?php

namespace App\Http\Controllers;

use App\Models\PejabatEksekutif;
use Illuminate\Http\Request;

class PejabatEksekutifController extends Controller
{

    public function viewPejabat(){
        $pejabat = PejabatEksekutif::orderBy('created_at', 'DESC')->get();
        return view('admin.jabatan.pejabat.Pejabat', compact('pejabat'));
    }

    public function viewPejabatAdd(){
        return view('admin.pejabat.pejabat.PejabatAdd');
    }
    
    public function store(Request $request){
        try{

            $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'deskripsi' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
    
            $pejabat = new PejabatEksekutif();
            $pejabat->nama = $request->nama;
            $pejabat->jabatan = $request->jabatan;
            $pejabat->deskripsi = $request->deskripsi;
    
            if($request->hasFile('image')){
                $imageName = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/pejabat'), $imageName);
                $pejabat->image = $imageName;
            }
    
            $pejabat->save();
    
            return view('admin.jabatan.pejabat.Pejabat')->with('success', 'Data Berhasil Di unggah');
        } catch(\Exception){
                
            return back()->with('error', 'Data gagal Di unggah');
        }
    }
}
