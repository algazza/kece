<?php

namespace App\Http\Controllers;

use App\Models\Penghargaan;
use Illuminate\Http\Request;

class PenghargaanController extends Controller
{
    public function viewPenghargaan(){
        $penghargaan = Penghargaan::get();
        return view('admin.Penghargaan.penghargaan', compact('penghargaan'));
    }
    
    public function viewPenghargaanUpdate($id){
        $penghargaanFind = Penghargaan::find($id);
        $penghargaan = Penghargaan::get();
        return view('admin.Penghargaan.penghargaanUpdate', compact('penghargaan', 'penghargaanFind'));
    }

    public function store(Request $request){

        try {
            $validateData = $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'nama_penghargaan' => 'required',
            ]);
        
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('image/public/penghargaan'), $imageName);
            $validateData['image'] = $imageName;
        
            $penghargaan = Penghargaan::create($validateData);
            $penghargaan->save();

            return back()->with('success', 'Data Berhasil Ditambahkan');
        } catch (\Exception $e) {
            return back()->with('success', 'Data Gagal Ditambahkan');
        }
        
    }


    public function update(Request $request, $id){
        $penghargaan = Penghargaan::find($id);

        $validateData = $request->validate([
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'nama_penghargaan' => 'required',
        ]);

        if($request->hasFile('image')){
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('image/public/penghargaan'),$imageName);
            $validateData['image'] = $imageName;
        } else{
            if(!isset($validateData['image'])){
                $validateData['image'] = $penghargaan->image;
            }
        }

        $penghargaan->update($validateData);

        return redirect()->route('penghargaan.index')->with('success', 'Data Penghargaan Behasil Di Perbarui');
    }

    public function destroy($id){
        $penghargaan = Penghargaan::find($id);
        $penghargaan->delete();
        return redirect()->route('penghargaan.index')->with('success', 'Data Penghargaan Behasil Di Hapus');

    }
}
