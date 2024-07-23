<?php

namespace App\Http\Controllers\Admin;

use App\Models\Kredit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function tampil(){
        $kredit = Kredit::orderBy('created_at', 'DESC')->get();
        return view('admin.dashboard', compact('kredit'));
    }
}
