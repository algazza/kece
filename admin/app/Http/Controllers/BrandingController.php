<?php

namespace App\Http\Controllers;

use App\Models\Branding;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ModelController extends Controller
{

    public function viewBranding(){
        $branding = Branding::orderBy('created_at', 'DESC')->get();
        return view('admin.branding.view', compact('branding'));
    }


    public function brandingDetail($id){
        try{
            $branding = Branding::find($id);
            return view('admin.branding.detail', compact('branding'));
        } catch(\Exception $e){
            return redirect()->back()->with('error', 'Data Tidak Dapat Di Akses');
        }
    }

    public function store(Request $request){
        try{
            $request->validate([
                'nama' => 'required|string',
                'email' => 'required|string',
                'no_handphone' => 'required|integer',
                'nama_usaha' => 'required|string',
                'bidang_usaha' => 'required|string',
                'jenis_sponsor' => 'required',
                'lokasi' => 'required',
            ]);
    
            $branding = new Branding();
            $branding->nama = $request->nama;
            $branding->email = $request->email;
            $branding->no_handphone = $request->no_handphone;
            $branding->nama_usaha = $request->nama_usaha;
            $branding->bidang_usaha = $request->bidang_usaha;
            $branding->jenis_sponsor = $request->jenis_sponsor;
            $branding->lokasi = $request->lokasi;
            $branding->catatan = $request->catatan;
    
            if($request->hasFile('file')){
                $fileBranding = $request->file->getClientOriginalName() . '=' . $request->id;
                $request->file->move(public_path('image/public/branding'), $fileBranding);
                $branding->file = $fileBranding;
            }
    
            $branding->save();
    
            return response()->json([
                'success' => true,
                'message' => 'Data Berhasil Di Terima'
            ]);
        } catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Data Gagal Di Terima',
                'error' => $e->getMessage(),
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
            ]);
        }
        

    }
}
