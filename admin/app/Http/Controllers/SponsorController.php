<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Sponsor;
use Illuminate\Http\Request;

class SponsorController extends Controller
{
    public function index(Request $request)
    {
        $jenis_sponsor = $request->input('jenis_sponsor');
    
        $sponsor = Sponsor::when($jenis_sponsor, function ($query, $jenis_sponsor) {
            return $query->where('jenis_sponsor', $jenis_sponsor);
        })->orderby('created_at', 'DESC')->paginate();
    
        return view('admin.Sponsor', compact('sponsor'));
    }
    
    public function store(Request $request)
    {
        $sponsor = new Sponsor();
    
        $sponsor->nama = $request->nama;
        $sponsor->email = $request->email;
        $sponsor->no_handphone = $request->no_handphone;
        $sponsor->nik = $request->nik;
        $sponsor->alamat = $request->alamat;
        $sponsor->bidang_usaha = $request->bidang_usaha;
        $sponsor->nama_usaha = $request->nama_usaha;
        $sponsor->catatan = $request->catatan;
        $sponsor->jenis_sponsor = $request->jenis_sponsor;
        $sponsor->jenis = $request->jenis;
        $sponsor->code = $request->code;
        $sponsor->ip_user = $request->ip_user;
        $sponsor->created_at = Carbon::now();
        $sponsor->updated_at = Carbon::now();
        

        if ($request->hasFile('pdf')) {
            $fileName = time() . '.' . $request->pdf->getClientOriginalExtension();
            $request->pdf->move(public_path('image/public/sponsor'), $fileName);
            $sponsor->pdf = $fileName;
        }
    
    
        $sponsor->save();
    
        return response()->json($sponsor);
    }
    


}
