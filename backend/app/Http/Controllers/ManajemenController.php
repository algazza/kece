<?php

namespace App\Http\Controllers;

use App\Models\Manajemen;
use Illuminate\Http\Request;

class ManajemenController extends Controller
{
    public function viewManajemen(){
        $manajemen = Manajemen::get();
        return view('admin.jabatan.Jabatan', compact('manajemen'));
    }

    public function viewManajemenAdd(){
        return view('admin.jabatan.JabatanAdd');
    }

    public function store(Request $request){
        try{
            $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'deskripsi' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
    
            $manajemen = new Manajemen();
            $manajemen->nama = $request->nama;
            $manajemen->jabatan = $request->jabatan;
            $manajemen->deskripsi = $request->deskripsi;
    
            if($request->hasFile('image')){
                $manajemenImage = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/manajemen'), $manajemenImage);
                $manajemen->image = $manajemenImage;
            }
    
            $manajemen->save();
    
            return redirect()->route('manajemen.index')->with('success', 'Data Manajemen Berhasil DI Tambah');
        } catch(\Exception $e){
            return redirect()->back()->with('error', 'Data Manajemen Gagal Ditambah');
        }
        
    }

    public function destroy($id){
        try{
            $manajemen = Manajemen::find($id);
            $manajemen->delete();
            return redirect()->route('manajemen.index')->with('success', 'Data Manajemen berhasil di hapus');
        } catch (\Exception $e){
            return redirect()->back()->with('error', 'Data Manajemen Gagal Di Hapus');
        }
    }

    public function viewManajemenFind($id){
        $manajemen = Manajemen::find($id);
        return view('admin.jabatan.JabatanEdit', compact('manajemen'));
    }

    public function update(Request $request,$id){
        try{
            $manajemen = Manajemen::find($id);
            $manajemenValidateData = $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'deskripsi' => 'required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if($request->hasFile('image')){
                $manajemenImage = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/manajemen'), $manajemenImage);
                $manajemenValidateData['image'] = $manajemenImage;
            } else {
                if(!isset($manajemenValidateData['image'])){                    
                    $manajemenValidateData['image'] = $manajemen->image;
                }
            }

            $manajemen->update($manajemenValidateData);

            return redirect()->route('manajemen.index')->with('success', 'Data Manajemen Berhasil Di Update');
        }catch(\Exception $e){
            return redirect()->back()->with('error', 'Data Manajemen gagal Di Update');
        }
    }


    public function index(){
        $manajemen = Manajemen::get();
        return response()->json($manajemen);
    }

}
