<?php

namespace App\Http\Controllers;

use App\Models\Penghargaan;
use Illuminate\Http\Request;

class PenghargaanController extends Controller
{
    public function index(){
        $penghargaan = Penghargaan::get()->latest();
        return view('penghargaan.index', compact('penghargaan'));
    }

    public function store(Request $request){

        try{
            $validateData = $request->validate([
                'image' => 'required',
                'nama_penghargaan' => 'required',
            ]);
    
            $penghargaan = Penghargaan::create($validateData);
    
            return view('mm', compact('penghargaan'))->with('success', 'Data Berhasil Di Tambahkan');
        }catch(\Exception $e){
            return view('mm', compact('penghargaan'))->with('error', ('Data Gagal DI Tambahkan'));
        }
        
    }

    public function update(Request $request, $id){
        $penghargaan = Penghargaan::find($id);

        $validateData = $request->validate([
            'image' => 'required',
            'nama_penghargaan' => 'required',
        ]);

        $penghargaan->update($validateData);

        return redirect()->route('')->with('success', 'Data Penghargaan Behasil Di Perbarui');
    }

    public function destroy($id){
        $penghargaan = Penghargaan::find($id);
        $penghargaan->delete();
        return redirect()->route('')->with('success', 'Data Penghargaan Behasil Di Hapus');

    }
}
