<?php

namespace App\Http\Controllers;

use App\Models\Direksi;
use Illuminate\Http\Request;

class DireksiController extends Controller
{
    public function viewManajemen(){
        $direksi = Direksi::get();
        return view('admin.jabatan.direksi.Direksi', compact('direksi'));
    }

    public function viewManajemenAdd(){
        return view('admin.jabatan.direksi.DireksiAdd');
    }

    public function store(Request $request){
        try{
            $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'deskripsi' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
    
            $direksi = new Direksi();
            $direksi->nama = $request->nama;
            $direksi->jabatan = $request->jabatan;
            $direksi->deskripsi = $request->deskripsi;
    
            if($request->hasFile('image')){
                $manajemenImage = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/manajemen'), $manajemenImage);
                $direksi->image = $manajemenImage;
            }
    
            $direksi->save();
    
            return redirect()->route('direksi.index')->with('success', 'Data direksi Berhasil DI Tambah');
        } catch(\Exception $e){
            return redirect()->back()->with('error', 'Data direksi Gagal Ditambah');
        }
        
    }

    public function destroy($id){
        try{
            $direksi = direksi::find($id);
            $direksi->delete();
            return redirect()->route('direksi.index')->with('success', 'Data direksi berhasil di hapus');
        } catch (\Exception $e){
            return redirect()->back()->with('error', 'Data direksi Gagal Di Hapus');
        }
    }

    public function viewManajemenFind($id){
        $direksi = direksi::find($id);
        return view('admin.jabatan.JabatanEdit', compact('direksi'));
    }

    public function update(Request $request,$id){
        try{
            $direksi = direksi::find($id);
            $manajemenValidateData = $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'deskripsi' => 'required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if($request->hasFile('image')){
                $manajemenImage = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/direksi'), $manajemenImage);
                $manajemenValidateData['image'] = $manajemenImage;
            } else {
                if(!isset($manajemenValidateData['image'])){                    
                    $manajemenValidateData['image'] = $direksi->image;
                }
            }

            $direksi->update($manajemenValidateData);

            return redirect()->route('direksi.index')->with('success', 'Data direksi Berhasil Di Update');
        }catch(\Exception $e){
            return redirect()->back()->with('error', 'Data direksi gagal Di Update');
        }
    }


    public function index(){
        $direksi = Direksi::get();
        return response()->json($direksi);
    }
}
