<?php

namespace App\Http\Controllers;

use App\Models\Manajemen;
use Illuminate\Http\Request;

class ManajemenController extends Controller
{
    public function store(Request $request){
        try{
            $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'tanggal' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
    
            $manajemen = new Manajemen();
            $manajemen->nama = $request->nama;
            $manajemen->jabatan = $request->jabatan;
            $manajemen->tanggal = $request->tanggal;
    
            if($request->hasFile('image')){
                $manajemenImage = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/manajemen', $manajemenImage));
                $manajemen->image = $manajemenImage;
            }
    
            $manajemen->save();
    
            return redirect()->route('')->with('success', 'Data Manajemen Berhasil DI Tambah');
        } catch(\Exception $e){
            return redirect()->back()->with('error', 'Data Manajemen Gagal Di Tambah');
        }
    }

    public function destroy($id){
        try{
            $manajemen = Manajemen::find($id);
            $manajemen->delete();
            return redirect()->route('')->with('success', 'Data Manajemen');
        } catch (\Exception $e){
            return redirect()->back()->with('error', 'Data Manajemen Gagal Di Hapus');
        }
    }
    

    public function update(Request $request,$id){
        try{
            $manajemen = Manajemen::find();
            $manajemenValidateData = $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'tanggal' => 'required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if($request->hasFile($manajemenValidateData['image'])){
                $manajemenImage = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/manajemen'), $manajemenImage);
                $manajemenValidateData['image'] = $manajemenImage;
            } else {
                if(!isset($manajemenValidateData['image'])){                    
                    $manajemenValidateData['image'] = $manajemen->image;
                }
            }

            $manajemen->update($manajemenValidateData);

            return redirect()->route('')->with('success', 'Data Manajemen Berhasil Di Update');
        }catch(\Exception $e){
            return redirect()->route('')->with('success', 'Data Manajemen Berhasil Di Update');
        }
    }
}
