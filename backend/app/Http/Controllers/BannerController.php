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
        try {
            $request->validate([
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
    
            $banner = new Banner();
            
            if ($request->hasFile('image')) {
                $imageName = time() . '.' . $request->image->extension();
                $imagePath = $request->image->getRealPath();
                
                list($originalWidth, $originalHeight, $imageType) = getimagesize($imagePath);
                $aspectRatio = 21 / 8;
                
                $newWidth = $originalWidth;
                $newHeight = round($originalWidth / $aspectRatio);
    
                if ($originalHeight < $newHeight) {
                    $newHeight = $originalHeight;
                    $newWidth = round($originalHeight * $aspectRatio);
                }
    
                $canvas = imagecreatetruecolor($newWidth, $newHeight);
                $source = null;
                
                switch ($imageType) {
                    case IMAGETYPE_JPEG:
                        $source = imagecreatefromjpeg($imagePath);
                        break;
                    case IMAGETYPE_PNG:
                        $source = imagecreatefrompng($imagePath);
                        imagealphablending($canvas, false);
                        imagesavealpha($canvas, true);
                        break;
                    case IMAGETYPE_GIF:
                        $source = imagecreatefromgif($imagePath);
                        break;
                    default:
                        throw new \Exception('Unsupported image type.');
                }
    
                imagecopyresampled($canvas, $source, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);
    
                $newImagePath = public_path('image/public/banner/' . $imageName);
    
                switch ($imageType) {
                    case IMAGETYPE_JPEG:
                        imagejpeg($canvas, $newImagePath, 90);
                        break;
                    case IMAGETYPE_PNG:
                        imagepng($canvas, $newImagePath);
                        break;
                    case IMAGETYPE_GIF:
                        imagegif($canvas, $newImagePath);
                        break;
                }
    
                imagedestroy($canvas);
                imagedestroy($source);
    
                $banner->image = $imageName;
            } else {
                $banner->image = 'profil.jpg';
            }
    
            $banner->save();
    
            return redirect()->route('banner')->with('success', 'Banner Berhasil di tambahkan');
    
        } catch (\Exception $e) {
            return redirect()->route('banner')->with('error', 'Banner gagal di tambahkan');
        }
    }

    public function update(){
        
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




    public function index(){
        $banner = Banner::OrderBy('created_at', 'DESC')->get();
        return response()->json($banner);
    }
}
