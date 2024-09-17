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
        $sponsorData = [
            'nama' => $request->nama,
            'email' => $request->email,
            'no_handphone' => $request->no_handphone,
            'nik' => $request->nik,
            'alamat' => $request->alamat,
            'bidang_usaha' => $request->bidang_usaha,
            'nama_usaha' => $request->nama_usaha,
            'catatan' => $request->catatan,
            'jenis_sponsor' => $request->jenis_sponsor,
            'jenis' => $request->jenis,
            'code' => $request->code,
            'ip_user' => $request->ip_user,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ];

        if($request->hasFile('pdf')){
            $validateData = time() . '.' . $request->pdf->extension();
            $request->pdf->move(public_path('image/public/sponsor'), $validateData);
            $validateData = $validateData['pdf'];
        }
        $sponsor = Sponsor::create($sponsorData);

        return response()->json($sponsor);   
    }

}
