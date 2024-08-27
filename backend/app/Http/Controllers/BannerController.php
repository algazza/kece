<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function viewBanner(){
        $banner = Banner::orderBy('created_at', 'DESC')->get();
        return view ('admin.banner.Banner', compact('banner'));
    }

    public function store(Request $request){
        try{
            $request->validate([
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $banner = new Banner();
            $banner->image = $request->image;

            if ($request->hasFile('image')) {
                $imageName = time() . '.' . $request->image->extension();  
                $request->image->move(public_path('image/public/banner'), $imageName);
                $banner->image = $imageName;
            } else {
                $banner->image = 'profil.jpg';
            }

            $banner->save();

            return redirect()->route('banner')->with('success', 'Banner Berhasil di tambahkan');

        } catch(\Exception $e) {
            return redirect()->route('banner')->with('error', 'Banner gagal di tambahkan');
        }
    }

    public function destroy($id){
        try{
            $banner = Banner::find($id);
            $banner->delete(); 
            return redirect()->route('banner')->with('success', 'Banner Berhasil Di Hapus');
        } catch(\Exception $e){
            return redirect()->route('banner')->with('error', 'Banner Gagal Di Hapus');
        }
    }
}
