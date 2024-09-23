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
        return view('admin.jabatan.pejabat.PejabatAdd');
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
    
            return redirect()->route('pejabat.index')->with('success', 'Data Berhasil Di unggah');
        } catch(\Exception){
                
            return back()->with('error', 'Data gagal Di unggah');
        }
    }

    public function destroy($id){
        try{
            $pejabat = PejabatEksekutif::find($id);
            $pejabat->delete();
            return redirect()->route('pejabat.index')->with('success', 'Data Berhasil Di Hapus');
        } catch(\Exception){
            return redirect()->route('pejabat.index')->with('error', 'Data gagal Di Hapus');
        }
    }

    public function viewPejabatFind($id){
        try{
            $pejabat = PejabatEksekutif::find($id);
            return view('admin.jabatan.pejabat.PejabatEdit', compact('pejabat'));
        } catch(\Exception $e){
            return back()->with('error', 'Data Tidak Ada');
        }
    }

    public function update(Request $request, $id){
        try{
            $pejabat = PejabatEksekutif::find($id);

            $validateData = $request->validate([
                'nama' => 'required|string',
                'jabatan' => 'required|string',
                'deskripsi' => 'required|string',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if($request->hasFile('image')){
                $imageName = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/pejabat'), $imageName);
                $validateData['image'] = $imageName;
            } else {
                if(!isset($validateData['image'])){
                    $validateData['image'] = $pejabat->image;
                };
            }

            $pejabat->update($validateData);

            return redirect()->route('pejabat.index')->with('success', 'Data Berhaasil DI update');
        } catch(\Exception $e){
            return redirect()->route('pejabat.index')->with('error', 'Data gagal Di update' . $e);
        }
    }

    public function index(){
        $pejabat = PejabatEksekutif::get();
        return response()->json($pejabat);
    }
}
