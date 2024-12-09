<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ArmorProperty;
use Symfony\Component\HttpFoundation\Response;

class ArmorController extends Controller
{
    public function viewArmor(){
        $armor = ArmorProperty::orderBy('created_at', 'DESC')->get();
        return view('admin.armorprop.ArmorProp',compact('armor'));
    }

    public function viewArmorAdd(){
        return view('admin.armorprop.AddProp');
    }

    public function store(Request $request){
        try{
            $request->validate([
                'instagram' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
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
            $armor->alamat = $request->alamat;
            $armor->alamat_lengkap = $request->alamat_lengkap;
            $armor->kecamatan = $request->kecamatan;
            $armor->bed = $request->bed;
            $armor->shower = $request->shower;
            $armor->luas_bangunan = $request->luas_bangunan;
            $armor->luas_tanah = $request->luas_tanah;
            $armor->deskripsi = $request->deskripsi;
            $armor->slug = time();
            $armor->harga = $request->harga;

            if($request->hasFile('image')){
                $imageFile = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/armor'), $imageFile);
                $armor->image = $imageFile;
            }

            $armor->save();

            return redirect()->route('armor.index')->with('success', 'Data Property Berhasil DI Tambah');
        } catch (\Exception $e) {
            return back()->with('error', 'Data Property Gagal DI Tambah' . $e);
        }
    }

    public function destroy($id){
        try{
            $armor = ArmorProperty::find($id);
            $armor->delete();
            return back()->with('success', 'Data Berhasil DI Hapus');
        } catch(\Exception $e){
            return back()->with('error', 'Data Gagal DI Hapus');
        }
    }


    public function viewArmorIsi($slug){
        try{
            $armor = ArmorProperty::where('slug',$slug)->first();
            return view('admin.armorprop.IsiArmorProp', compact('armor'));
        }  catch(\Exception $e){
            return back()->with('error', 'Data Tidak Ditemukan');
        }
    }

    public function find($slug){
        try{
            $armor = ArmorProperty::where('slug',$slug)->first();
            $hargaArmor = $armor->harga;

            if( Str::contains($hargaArmor, 'Miliar')) {
                $hapusMiliar = Str::replace(['Miliar', '.', ' '], '', $hargaArmor);
                $harga = $hapusMiliar . "000000000";
            } else {
                $harga = Str::replace('.',"", $hargaArmor);
            }

            return view('admin.armorprop.EditProp', compact('armor', 'harga'));
        }  catch(\Exception $e){
            return back()->with('error', 'Data Tidak Ditemukan' . $e);
        }
    }


    public function update($slug, Request $request) {
        try{
            $armor = ArmorProperty::where('slug', $slug)->first();
            $request->validate([
                'instagram' => 'required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
                'alamat' => 'required',
                'alamat_lengkap' => 'required',
                'kecamatan' => 'required|string',
                'bed' => 'required',
                'shower' => 'required',
                'luas_bangunan' => 'required',
                'luas_tanah' => 'required',
                'deskripsi' => 'required',
                'slug' => 'required',
            ]);

            $armor->instagram = $request->instagram;
            $armor->alamat = $request->alamat;
            $armor->alamat_lengkap = $request->alamat_lengkap;
            $armor->kecamatan = $request->kecamatan;
            $armor->bed = $request->bed;
            $armor->shower = $request->shower;
            $armor->luas_bangunan = $request->luas_bangunan;
            $armor->luas_tanah = $request->luas_tanah;
            $armor->deskripsi = $request->deskripsi;
            $armor->slug = $request->slug;
            $armor->harga = $request->harga;

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
            return redirect()->route('armor.index')->with('success', 'Data Property Berhasil Di Update');
        } catch(\Exception $e){
            return back()->with('error', 'Data Tidak Ditemukan' . $e);
        }
    }

    public function index(){
        try{
            $armor = ArmorProperty::orderBy('created_at', 'DESC')->get();
            return response()->json([
                'data' => $armor,
                'message' => 'Data Property Berhasil Di Tampilkan'
            ]);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e
            ]);
        }
    }

    public function show($slug)
    {
        try {
            $armor = ArmorProperty::where('slug', $slug)->first();

            return response()->json([
                'data' => $armor,
                'message' => 'Data Property Berhasil Ditampilkan',
                'status' => Response::HTTP_OK,
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Terjadi kesalahan: ' . $e->getMessage(),
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


}
