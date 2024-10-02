<?php

namespace App\Http\Controllers;

use App\Models\ArmorProperty;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ArmorController extends Controller
{
    public function viewArmor(){
        $armor = ArmorProperty::orderBy('created', 'DESC')->get();
        return view('',compact('armor'));
    }

    public function store(Request $request){
        try{
            $request->validate([
                'instagram' => 'required|string',
                'image' => 'required|string',
                'harga' => 'required',
                'alamat' => 'required',
                'alamat_lengkap' => 'required',
                'kecamatan' => 'required|string',
                'bed' => 'required',
                'shower' => 'required',
                'luas_bangunan' => 'required',
                'luas_tanah' => 'required',
                'deskripsi' => 'required',
            ]);
    
            $armor = new ArmorProperty();
            $armor->instagram = $request->instagram;
            $armor->harga = $request->harga;
            $armor->alamat = $request->alamat;
            $armor->alamat_lengkap = $request->alamat_lengkap;
            $armor->kecamatan = $request->kecamatan;
            $armor->bed = $request->bed;
            $armor->shower = $request->shower;
            $armor->luas_bangunan = $request->luas_bangunan;
            $armor->luas_tanah = $request->luas_tanah;
            $armor->deskripsi = $request->deskripsi;
    
            if($request->hasFile('image')){
                $imageFile = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/armor'), $imageFile);
                $armor->image = $imageFile;
            }
    
            $armor->save();
    
            return redirect()->route('armor.index')->with('success', 'Data Property Berhasil DI Tambah');
        } catch (\Exception $e) {
            return back()->with('error', 'Data Property Gagal DI Tambah');
        }
    }

    public function destroy($id){
        try{
            $armor = ArmorProperty::find($id);
            $armor->delete();
            return redirect()->route('')->with('success', 'Data Berhasil DI Hapus');
        } catch(\Exception $e){
            return back()->with('error', 'Data Gagal DI Hapus');
        }
    }


    public function find($id){
        try{
            $armor = ArmorProperty::find($id);
            return view('admin.armor.edit', compact('armor'))->with('success', 'Data PRoperty Berhasil Di Tambah');
        }  catch(\Exception $e){
            return back()->with('error', 'Data Tidak Ditemukan');
        }
    }


    public function update($id, Request $request) {
        try{
            $armor = ArmorProperty::find($id);
            $request->validate([
                'instagram' => 'required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
                'harga' => 'required',
                'alamat' => 'required',
                'alamat_lengkap' => 'required',
                'kecamatan' => 'required|string',
                'bed' => 'required',
                'shower' => 'required',
                'luas_bangunan' => 'required',
                'luas_tanah' => 'required',
                'deskripsi' => 'required',
            ]);
    
            $armor = new ArmorProperty();
            $armor->instagram = $request->instagram;
            $armor->harga = $request->harga;
            $armor->alamat = $request->alamat;
            $armor->alamat_lengkap = $request->alamat_lengkap;
            $armor->kecamatan = $request->kecamatan;
            $armor->bed = $request->bed;
            $armor->shower = $request->shower;
            $armor->luas_bangunan = $request->luas_bangunan;
            $armor->luas_tanah = $request->luas_tanah;
            $armor->deskripsi = $request->deskripsi;
    
            if($request->hasFile('image')){
                $imageFile = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/armor'), $imageFile);
                $armor->image = $imageFile;
            }else{
                if(!isset($armor->image)){
                    $armor->image = $armor->image;
                }
            }
    
            $armor->save();
            return redirect()->route('')->with('success', 'Data Property Berhasil Di Update');
        } catch(\Exception $e){
            return back()->with('error', 'Data Tidak Ditemukan');
        }
    }

    public function index(){
        $armor = ArmorProperty::orderBy('created', 'DESC')->get();
        return response()->json([
            'data' => $armor,
            'message' => 'Data Property Berhasil Di Tampilkan'
        ]);
    }

    public function findArmor($id){
        $armor = ArmorProperty::find($id);

        if(!$armor){
            return response()->json([
                'message' => 'Data Tidak Ditemukan',
                'status' => Response::HTTP_NOT_FOUND,
            ]);
        }
        return response()->json([
            'data' => $armor,
            'message' => 'Data Property Berhasil Di Tampilkan'
        ]);
    }

    
}
