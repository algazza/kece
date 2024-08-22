<?php

namespace App\Http\Controllers;

use App\Models\Deposito;
use Carbon\Carbon;
use App\Models\Kredit;
use App\Models\Pickup;
use App\Models\Tabungan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Pagination\LengthAwarePaginator;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $token = bin2hex(random_bytes(32));
        $tokenExpiry = Carbon::now()->addMinutes(60); 
        $request->session()->put('kredit_access_token', $token);
        $request->session()->put('kredit_access_expiry', $tokenExpiry);
        $request->session()->put('last_dashboard_visit', Carbon::now());
    
        $totalData = Kredit::count() + Pickup::count();
        $kreditData = Kredit::orderBy('created_at', 'desc')->get();
        $pickupData = Pickup::orderBy('created_at', 'desc')->get();
        $dashboard = $kreditData->concat($pickupData)->sortByDesc('created_at')->values();
    
        return view('admin.dashboard.Dashboard', compact('dashboard', 'totalData'));
    }
    
    
    public function data(Request $request)
    {
        $kreditData = Kredit::orderBy('created_at', 'desc')->get();
        $pickupData = Pickup::orderBy('created_at', 'desc')->get();
        $depositoData = Deposito::orderBy('created_at', 'desc')->get();
        $tabunganData = Tabungan::orderBy('created_at', 'desc')->get();
    
        $dashboard = $kreditData->concat($pickupData)->concat($tabunganData)->concat($depositoData)->sortByDesc('created_at')->values();
    
        $currentPage = LengthAwarePaginator::resolveCurrentPage();

        $perPage = 20;
    
        $currentPageItems = $dashboard->slice(($currentPage - 1) * $perPage, $perPage)->values();
    
        $paginatedItems = new LengthAwarePaginator(
            $currentPageItems,
            $dashboard->count(),
            $perPage,
            $currentPage,
            ['path' => $request->url(), 'query' => $request->query()]
        );
    
        return response()->json([
            'data' => $paginatedItems->items(),
            'pagination' => [
                'current_page' => $paginatedItems->currentPage(),
                'last_page' => $paginatedItems->lastPage(),
                'per_page' => $paginatedItems->perPage(),
                'total' => $paginatedItems->total()
            ]
        ]);
    }

    public function getTotalData()
    {
        $totalData = Kredit::count() + Pickup::count() + Deposito::count() +Tabungan::count();
        return response()->json(['totalData' => $totalData]);
    }



    public function show(string $id)
    {   
        $dashboard = Kredit::find($id);
        if (!$dashboard) {
            $dashboard = Pickup::find($id);
        }
        if (!$dashboard) {
            return redirect()->route('dashboard')->with('error', 'Data not found');
        }
    
        return view('admin.dashboard.DashboardUser', compact('dashboard'));
    }
    

    public function search(Request $request)
    {
        $query = strtolower($request->input('query'));

        if ($query === 'kredit') {
            return redirect()->route('kredit.index');
        } elseif ($query === 'pickup') {
            return redirect()->route('pickup.index');
        } elseif ($query === 'admin') {
            return redirect()->route('admin');
        }

        return redirect()->route('dashboard')->with('error', 'Pencarian tidak ditemukan');
    }

}
