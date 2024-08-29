<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;

class LaporanController extends Controller
{
    public function viewLaporan(){
        return view('admin.laporan.laporan');
    }

    public function viewTriwulan(){
        $laporan = Laporan::where('jenis_laporan', 'triwulan')->get();
        return view ('admin.laporan.triwulan.triwulan', compact('laporan'));
    }

    public function viewGcg(){
        $laporan = Laporan::where('jenis_laporan', 'gcg')->get();
        return view ('admin.laporan.gcg.gcg', compact('laporan'));
    }

    public function viewTahunan(){
        $laporan = Laporan::where('jenis_laporan', 'tahunan')->get();
        return view ('admin.laporan.tahunan.tahunan', compact('laporan'));
    }


    public function store(Request $request)
    {
        try {
            $request->validate([
                'file_laporan' => 'required|mimes:pdf|max:10000',
                'tanggal' => 'required|string|max:256',
                'jenis_laporan' => 'required|string|max:256',
            ]);

            $laporan = new Laporan();
            $laporan->tanggal = $request->tanggal;
            $laporan->jenis_laporan = $request->jenis_laporan;
            
            if ($request->hasFile('file_laporan')) {
                $pdfName = time() . '.' . $request->file_laporan->extension();  
                $request->file_laporan->move(public_path('image/public/laporan'), $pdfName);
                $laporan->file_laporan = $pdfName;
            }   

            $laporan->save();

            return back()->with('success', 'Laporan berhasil ditambahkan.');
        } catch (\Exception $e) {
            return back()->with('error', 'Terjadi kesalahan saat menambahkan laporan.');
        }
    }


    public function destroy($id){
        $laporan = Laporan::find($id);

        $laporan->delete();

        return back()->with('success', 'Laporan Berhasil DI Hapus');
    }
}
