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
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $sponsor = Sponsor::create([
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
        ]);

        return response()->json('succes');
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
