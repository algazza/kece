<?php

namespace App\Http\Controllers\Admin\Component;

use App\Models\Kredit;
use Illuminate\Http\Request;
use App\Charts\MonthlyUsersChart;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Validated;

class KreditController extends Controller
{

    public function isi(){
        return view('admin.component.kredit.kreditUser');
    }

    public function tampil(MonthlyUsersChart $chart){
        $kredit = Kredit::orderBy('created_at', 'DESC')->get();
        return view('admin.component.kredit.kredit', compact('kredit'), ['chart' => $chart->build()]);
    }

    public function submit(Request $request){
        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'no_handphone' => 'required|integer|unique:users',
            'nik' => 'required|integer|unique:users',
            'alamat' => 'required|string|max:255',
            'pekerjaan' => 'required|string|max:255',
            'jumlah_pinjaman' => 'required|string|max:255',
            'jangka_waktu' => 'required|string|max:255',
            'bunga' => 'required|string|max:255',
            'jenis_angunan' => 'required|string|max:255',
            'perhitungan_bunga' => 'required|string|max:255',
            'penghasilan_perbulan' => 'required|string|max:255',
            'catatan' => 'nullable|string|max:255',
        ]);

        $kredit = new Kredit();
        $kredit->nama = $request->nama;
        $kredit->email = $request->email;
        $kredit->no_handphone = $request->no_handphone;
        $kredit->nik = $request->nik;
        $kredit->alamat = $request->alamat;
        $kredit->pekerjaan = $request->pekerjaan;
        $kredit->jumlah_pinjaman = $request->jumlah_pinjaman;
        $kredit->jangka_waktu = $request->jangka_waktu;
        $kredit->bunga = $request->bunga;
        $kredit->jenis_angunan = $request->jenis_angunan;
        $kredit->perhitungan_bunga = $request->perhitungan_bunga;
        $kredit->penghasilan_perbulan = $request->penghasilan_perbulan;
        $kredit->catatan = $request->catatan;

        $kredit->save();

        return redirect()->route('kredit.tampil');
    }
        

}
