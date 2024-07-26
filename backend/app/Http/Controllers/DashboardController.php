<?php

namespace App\Http\Controllers;

use App\Models\Kredit;
use Illuminate\Http\Request;
use Carbon\Carbon;


class DashboardController extends Controller
{
    public function index()
    {
        $kredit = Kredit::orderBy('created_at', 'desc')->paginate(6);
        return view('admin.Dashboard', compact('kredit'));
    }
}
