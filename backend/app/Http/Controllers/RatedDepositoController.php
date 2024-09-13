<?php

namespace App\Http\Controllers;

use App\Models\RatedDeposito;
use App\Models\RatedKredit;
use Illuminate\Http\Request;

class RatedDepositoController extends Controller
{

    public function viewDepositoRated(){
        $ratedDeposito = RatedDeposito::get();
        $ratedKredit = RatedKredit::get();
        return view('admin.RateDisc.rate', compact('ratedDeposito', 'ratedKredit'));
    }

    public function update(Request $request)
    {
        try{
            $validatedData = $request->validate([
                'discount' => 'required|numeric',
            ]);
            
            $discount = $validatedData['discount'];
            
            $ratedDeposito = RatedDeposito::all();
            $ratedKredit = RatedKredit::all();
            
            foreach ($ratedDeposito as &$item) {
                $item->update([
                    '12_bulan' => $item->plafon * $discount / 100 / 12 * 0.8,
                    '24_bulan' => $item->plafon * $discount / 100 / 24 * 0.8,
                    '36_bulan' => $item->plafon * $discount / 100 / 36 * 0.8,
                ]);
            }
            
            return redirect()->route('rated.view')->with('success', 'Data Berhasil Diubah');
            
        }catch(\Exception $e){
            return redirect()->route('rated.view')->with('error', 'data gagal di ubah'); 
        }
    }

    public function index(){
        $ratedDeposito = RatedDeposito::get();
        return response()->json($ratedDeposito);
    }
}
