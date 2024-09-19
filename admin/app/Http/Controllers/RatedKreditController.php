<?php

namespace App\Http\Controllers;

use App\Models\RatedKredit;
use Illuminate\Http\Request;

class RatedKreditController extends Controller
{

    public function updateAll(Request $request)
    {
        // Loop melalui setiap rate id
        foreach ($request->plafon as $id => $plafon) {
            // Hapus tanda pemisah ribuan sebelum menyimpan ke database
            $plafon = str_replace('.', '', $plafon);
            $bulan_12 = str_replace('.', '', $request->bulan_12[$id]);
            $bulan_24 = str_replace('.', '', $request->bulan_24[$id]);
            $bulan_36 = str_replace('.', '', $request->bulan_36[$id]);
    
            // Update data ke database
            RatedKredit::where('id', $id)->update([
                'plafon' => $plafon,
                'bulan_12' => $bulan_12,
                'bulan_24' => $bulan_24,
                'bulan_36' => $bulan_36,
            ]);
        }
    
        return redirect()->route('rated.view')->with('success', 'Data berhasil diperbarui.');
    }
    

    public function index(){
        $ratedKredit = RatedKredit::get();
        return response()->json($ratedKredit);
    }

    
    public function updateAt(){
        $rateKreditUpdate = RatedKredit::orderBy('updated_at', 'DESC')->first(['update_at']);
        return response()->json($rateKreditUpdate);
    }

}
