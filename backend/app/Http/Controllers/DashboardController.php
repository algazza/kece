<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Kredit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $request->session()->put('last_dashboard_visit', Carbon::now());

        $kredit = Kredit::orderBy('created_at', 'desc')->paginate(5);
        return view('admin.Dashboard', compact('kredit'));
    }
    

    public function kredit(Request $request)
    {
        $kredit = Kredit::orderBy('created_at', 'desc')->paginate(5);

        return response()->json([
            'data' => $kredit->items(),
            'pagination' => [
                'current_page' => $kredit->currentPage(),
                'last_page' => $kredit->lastPage(),
                'per_page' => $kredit->perPage(),
                'total' => $kredit->total()
            ]
        ]);
    }
}
