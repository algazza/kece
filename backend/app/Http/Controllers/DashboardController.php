<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Kredit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $token = bin2hex(random_bytes(32));
        $tokenExpiry = Carbon::now()->addMinutes(60); 
        $request->session()->put('kredit_access_token', $token);
        $request->session()->put('kredit_access_expiry', $tokenExpiry);
        $request->session()->put('last_dashboard_visit', Carbon::now());
    
        $dashboard = Kredit::orderBy('created_at', 'desc')->paginate(5);
        return view('admin.dashboard.Dashboard', compact('dashboard'));
    }
    
    public function kredit(Request $request)
    {
        $dashboard = Kredit::orderBy('created_at', 'desc')->paginate(5);

        return response()->json([
            'data' => $dashboard->items(),
            'pagination' => [
                'current_page' => $dashboard->currentPage(),
                'last_page' => $dashboard->lastPage(),
                'per_page' => $dashboard->perPage(),
                'total' => $dashboard->total()
            ]
        ]);
    }


    public function show(string $id)
    {
        $dashboard = Kredit::find($id);

        if(!$dashboard)
        return redirect()->route('dashboard')->with('error', 'Data not found');

        return view('admin.dashboard.DashboardUser', compact('dashboard'));
    }

}
