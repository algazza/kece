<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Kredit;
use App\Charts\KreditChart;
use Illuminate\Http\Request;
use App\Events\KreditCreated;

class KreditController extends Controller
{
    public function __construct()
    {
        $this->middleware('kredit.access')->only('index');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(KreditChart $chart)
    {
        $kredit = Kredit::orderBy('created_at', 'desc')->get();
        return view('admin.kredit.Kredit', compact('kredit'), ['chart' => $chart->build()]);
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
        $kredit = Kredit::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'no_handphone' => $request->no_handphone,
            'nik' => $request->nik,
            'pekerjaan' => $request->pekerjaan,
            'alamat' => $request->alamat,
            'total_pinjaman' => $request->total_pinjaman,
            'jangka_waktu' => $request->jangka_waktu,
            'jenis_angunan' => $request->jenis_angunan,
            'perhitungan_bunga' => $request->perhitungan_bunga,
            'bunga_pertahun' => $request->bunga_pertahun,
            'penghasilan_perbulan' => $request->penghasilan_perbulan,
            'catatan' => $request->catatan,
            'jenis' => $request->jenis,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    
        return response()->json('success');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $kredit = Kredit::find($id);
    
        if (!$kredit) {
            return redirect()->route('admin.Dashboard')->with('error', 'Data not found');
        }
    
        return view('admin.kredit.KreditUser', compact('kredit'));
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
