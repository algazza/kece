<?php

namespace App\Http\Controllers;

use App\Models\RatedKredit;
use Illuminate\Http\Request;

class RatedKreditController extends Controller
{
    public function viewKreditRated(){
        $rated = RatedKredit::get();
        return view('admin.rate', compact('rated'));
    }

    public function update(Request $request){
        $discount = $request->input('');
    }
}
