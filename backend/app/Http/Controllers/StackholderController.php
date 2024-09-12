<?php

namespace App\Http\Controllers;

use App\Models\Stackholer;
use Illuminate\Http\Request;

class StackholderController extends Controller
{
    public function viewStackholder(){
        $stackholder = Stackholer::get();
        return view('admin.stackholder', compact('stackholder'));
    }

    public function store(Request $request){

        try{
            $request->validate([
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
        
            $stackholder = new Stackholer();
        
            if($request->hasFile('image')){
                $imageStackholder = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/stackholder'), $imageStackholder);
                $stackholder->image = $imageStackholder;
            }
        
            $stackholder->save();
        
            return redirect()->route('stackholder.index')->with('success', 'Stackholder berhasil di tambahkan');
        } catch (\Exception $e){
            return redirect()->back()->with('error', 'Gagal menambahkan stackholder');
        }
    }

    public function update(Request $request, $id){
        try{
            $stackholder = Stackholer::find($id);

            $request->validate([
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg'
            ]);


            if($request->hasFile('image')){
                $imageStackholder = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/stackholder'), $imageStackholder);
                $stackholder->image = $imageStackholder;
            }

            $stackholder->update();
            return redirect()->route('stackholder.index')->with('success', 'Stackholder berhasil di update');
        } catch(\Exception $e){
            return redirect()->back()->with('error', 'Gagal mengupdate stackholder');
        }
    }


    public function destroy($id){
        try{
            $stackholder = Stackholer::find($id);
            $stackholder->delete();
            return redirect()->route('stackholder.index')->with('success', 'Stackholder berhasil dihapus');
        } catch (\Exception $e){
            return redirect()->back()->with('error', 'Gagal menghapus stackholder');
        }
    }


    public function index(){
        $stackholder = Stackholer::get();
        return response()->json($stackholder); 
    }
}
