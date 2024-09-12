<?php

namespace App\Http\Controllers;

use App\Models\RatedDeposito;
use Illuminate\Http\Request;

class RatedDepositoController extends Controller
{

    public function viewDepositoRated(){
        $ratedDeposito = RatedDeposito::get();
        return view('admin.rate', compact('ratedDeposito'));
    }

    public function calculate(Request $request)
    {
        $validatedData = $request->validate([
            'discount' => 'required|numeric',
        ]);

        $discount = $validatedData['discount'];

        // Ambil semua data dari database
        $ratedDeposito = RatedDeposito::all();

        foreach ($ratedDeposito as &$item) {
            $item->update([
                '12_bulan' => $item->plafon * $discount / 100 / 12 * 0.8,
                '24_bulan' => $item->plafon * $discount / 100 / 24 * 0.8,
                '36_bulan' => $item->plafon * $discount / 100 / 36 * 0.8,
            ]);
        }

        return view('admin.rate', [
            'ratedDeposito' => $ratedDeposito
        ]);
    }
}
