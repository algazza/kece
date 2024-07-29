<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Kredit;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $kredit = Kredit::orderBy('created_at', 'desc')->paginate(5);
        $request->session()->put('last_dashboard_visit', Carbon::now());
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

    public function generateToken(Request $request)
    {
        $token = Str::random(40);
        $expiry = Carbon::now()->addSeconds(5);    
        $request->session()->put('kredit_access_token', $token);
        $request->session()->put('kredit_access_expiry', $expiry);
    
        Log::info('Token generated at: ' . Carbon::now());
        Log::info('Token generated: ' . $token);
        Log::info('Token expiry: ' . $expiry);
    
        return redirect()->route('kredit.index');
    }
}
