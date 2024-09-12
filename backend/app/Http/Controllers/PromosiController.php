<?php

namespace App\Http\Controllers;

use App\Models\Promosi;
use Illuminate\Http\Request;

class PromosiController extends Controller
{
    public function viewPromosi(){
        $promosi = Promosi::get();
        return view('admin.promo', compact('promosi'));
    }


    public function store(Request $request){
        try{

            $request->validate([
                'deskripsi' => 'required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
    
            $promosi = new Promosi();
            $promosi->deskripsi = $request->deskripsi;
    
            if($request->hasFile('image')){
                $imageName = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/promo'), $imageName);
                $promosi->image = $imageName;
            }
    
            $promosi->save();
            return redirect()->route('promosi.index')->with('success', 'Promosi Berhasil Di Unggah');
        } catch (\Exception $e){
            return redirect()->back()->with('error', 'Promosi Gagal Di Unggah');
        }
    }
}
