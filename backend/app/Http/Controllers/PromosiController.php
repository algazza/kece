<?php

namespace App\Http\Controllers;

use App\Models\Promosi;
use Illuminate\Http\Request;

class PromosiController extends Controller
{
    public function viewPromosi(){
        $promosi = Promosi::get();
        return view('admin.promo.promo', compact('promosi'));
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

    public function find($id){
        $promosi = Promosi::find($id);

        return view('admin.promo.promoUpdate', compact('promosi'));
    }

    function update(Request $request, $id){

        $promosi = Promosi::find($id);

        $validateData = $request->validate([
            'deskripsi' => 'required|string',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();  
            $request->image->move(public_path('image/public/promo'), $imageName);
            $validateData['image'] = $imageName;
        } else {
            if (!isset($validateData['image'])) {
                $validateData['image'] = $promosi->image;
            }
        }

        if(!$promosi){
            return redirect()->route('promosi.index')->with('eror','tidak di temukan');
        };

        $promosi->update($validateData);

        return redirect()->route('promosi.index')->with('success', 'promosi updated successfully');
    }


    public function destroy($id){
        try{
            $promosi = Promosi::find($id);
            $promosi->delete();
            return redirect()->route('promosi.index')->with('success', 'promosi berhasil dihapus');
        } catch (\Exception $e){
            return redirect()->back()->with('error', 'Gagal menghapus promosi');
        }
    }


    public function index(){
        $promosi = Promosi::get();
        return response()->json($promosi); 
    }
}
