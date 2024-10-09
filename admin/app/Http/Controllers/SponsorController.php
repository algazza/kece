<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Sponsor;
use Illuminate\Http\Request;

class SponsorController extends Controller
{
    public function index(Request $request)
    {

        $sponsor = Sponsor::orderBy('created_at', 'DESC')->get();    
        return view('admin.Sponsor', compact('sponsor'));
    }
    
    public function store(Request $request)
    {
        $sponsor = new Sponsor();
    
        $sponsor->nama = $request->nama;
        $sponsor->email = $request->email;
        $sponsor->no_handphone = $request->no_handphone;
        $sponsor->nama_acara = $request->nama_acara;
        $sponsor->tanggal_awal = $request->tanggal_awal;
        $sponsor->tanggal_akhir = $request->tanggal_akhir;
        $sponsor->lokasi = $request->lokasi;
        $sponsor->catatan = $request->tanggal_akhir;
        

        if ($request->hasFile('file')) {
            $fileName = time() . '.' . $request->file->getClientOriginalExtension();
            $request->file->move(public_path('image/public/sponsor'), $fileName);
            $sponsor->file = $fileName;
        }
    
    
        $sponsor->save();
    
        return response()->json($sponsor);
    }

    public function find($id){
        $sponsor = Sponsor::find($id);
        return view('', compact('id'));
    }
    


}
