<?php

namespace App\Http\Controllers;

use App\Models\Promo;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class PromoController extends Controller
{
    public function viewPromo(){
        $promo = Promo::orderby('created_at', 'DESC')->paginate(10);
        return view('admin.promo.Promo', compact('promo'));
    }

    public function viewPromoAdd(){
        return view('admin.promo.PromoAdd');
    }

    public function store(Request $request){
        try{

            $request->validate([
                'judul' => 'required|string|max:255',
                'keterangan' => 'required|string|max:100000',
                'tanggal' => 'required|string|max:255',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $promo = new Promo();
            $promo->judul = str_replace(['?', '!'], ' ', $request->judul);
            $promo->keterangan = $request->keterangan;
            $promo->tanggal = $request->tanggal;
            $promo->slug = Str::slug($request->judul, '-');

            if($request->hasFile('image')){
                $imageData = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/promo'), $imageData);
                $promo->image = $imageData;
            }

            $promo->save();

            return redirect()->route('promo.index')->with('success', 'Data Promo Berhasil Di Unggah');
        } catch(\Exception $e){
            return back()->with('error', 'Data Promo Gagal Di Unggah ' . $e->getMessage());
        }
    }

    public function find($slug){
        $promo = Promo::where('slug', $slug)->first();

        return view('admin.promo.PromoEdit', compact('promo'));
    }


    public function update(Request $request, $slug){
        try{
            $promo = Promo::where('slug', $slug)->first();

            $validateData =  $request->validate([
                'judul' => 'required|string|max:255',
                'keterangan' => 'required|string|max:100000',
                'tanggal' => 'required|string|max:255',
                'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $validateData['slug'] = Str::slug($validateData['judul']);
            $validateData['judul'] = str_replace(['?', '!'], ' ', $validateData['judul']);

            if($request->hasFile('image')){
                $imageData = time() . '.' . $request->image->extension();
                $request->image->move(public_path('image/public/promo'), $imageData);
                $validateData['image'] = $imageData;
            } else {
                if(!isset($validateData['image'])){
                    $validateData['image'] = $promo->image;
                }
            }

            $promo->update($validateData);

            return redirect()->route('promo.index')->with('success', 'Data Promo Berhasil Di Ubah');
        } catch (\Exception){
            return back()->with('error', 'Data Promo Gagal Di Ubah');
        }
    }


    public function destroy($id){
        try{
            $promo = Promo::find($id);
            $promo->delete();
            return redirect()->route('promo.index')->with('success', 'Data Promo Berhasil Di Hapus');
        } catch (\Exception){
            return back()->with('error', 'Data Promo Gagal Di Hapus');
        }
    }


    public function index(){
        $promo = Promo::orderBy('updated_at', 'DESC')->get();
        return response()->json($promo);
    }

    public function show($slug){
        $promo = Promo::where('slug', $slug)->first();
        return response()->json($promo);
    }

    public function updateAt(){
        $promoUpdate = Promo::orderBy('updated_at', 'DESC')->first(['update_at']);
        return response()->json($promoUpdate);
    }
}
