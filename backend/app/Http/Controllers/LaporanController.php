<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\File;

class LaporanController extends Controller
{
    public function viewLaporan(){
        return view('admin.laporan.laporan');
    }

    public function viewTriwulan(){
        $laporan = Laporan::where('jenis_laporan', 'Triwulan')->get();
        return view ('admin.laporan.triwulan.triwulan', compact('laporan'));
    }

    public function viewGcg(){
        $laporan = Laporan::where('jenis_laporan', 'GCG')->get();
        return view ('admin.laporan.gcg.gcg', compact('laporan'));
    }

    public function viewTahunan(){
        $laporan = Laporan::where('jenis_laporan', 'Tahunan')->get();
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
                $pdfName = $request->file_laporan->getClientOriginalName();
                $pdfName = pathinfo($pdfName, PATHINFO_FILENAME);
                $pdfName = $pdfName . '.' . $request->file_laporan->extension();
    
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

    public function index(){
        $laporan = Laporan::get();
        return response()->json($laporan);
    }

    public function download($filename)
    {
        $filePath = public_path('image/public/laporan/' . $filename);

        if (!file_exists($filePath)) {
            return back()->with('error', 'File tidak ditemukan.');
        }

        return Response::download($filePath, $filename);
    }
}
