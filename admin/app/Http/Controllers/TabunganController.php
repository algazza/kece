<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Tabungan;
use Illuminate\Http\Request;
use App\Charts\tabungan\KreditWeek;
use App\Charts\tabungan\KreditMounth;
use App\Exports\TabunganExport;
use Maatwebsite\Excel\Facades\Excel;

class TabunganController extends Controller
{
    public function __construct()
    {
        $this->middleware('kredit.access')->only('index');
    }

    public function index(Request $request, KreditWeek $chart, KreditMounth $chartMonth)
    {
        $token = bin2hex(random_bytes(32));
        $tokenExpiry = Carbon::now()->addSeconds(1000);

        $request->session()->put('kredit_access_token', $token);
        $request->session()->put('kredit_access_expiry', $tokenExpiry);
        $request->session()->put('last_dashboard_visit', Carbon::now());

        $tabungan = Tabungan::orderBy('created_at', 'desc')->paginate(20);

        return view('admin.tabungan.Tabungan', [
            'tabungan' => $tabungan,
            'chartWeek' => $chart->build(),
            'chartMonth' => $chartMonth->build(),
            'token' => $token,
        ]);
    }

    public function checkToken(Request $request)
    {
        $token = $request->session()->get('kredit_access_token');
        $tokenExpiry = $request->session()->get('kredit_access_expiry');
        $currentTime = Carbon::now();

        if (!$token || !$tokenExpiry || $currentTime->greaterThan(Carbon::parse($tokenExpiry))) {
            return response()->json(['valid' => false]);
        }

        return response()->json(['valid' => true]);
    }

    public function data(Request $request)
    {
        $search = $request->input('search');
    
        $query = Tabungan::orderBy('created_at', 'desc');
        if ($search) {
            $query->where('nama', 'like', "%{$search}%");
        }
    
        $tabungan = $query->paginate(20);
    
        return response()->json([
            'data' => $tabungan->items(),
            'pagination' => [
                'current_page' => $tabungan->currentPage(),
                'last_page' => $tabungan->lastPage(),
                'per_page' => $tabungan->perPage(),
                'total' => $tabungan->total()
            ]
        ]);
    }

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        $tabungan = Tabungan::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'no_handphone' => $request->no_handphone,
            'nik' => $request->nik,
            'pekerjaan' => $request->pekerjaan,
            'alamat' => $request->alamat,
            'catatan' => $request->catatan,
            'jenis' => $request->jenis,
            'code' => $request->code,
            'ip_user' => $request->ip_user,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    
        return response()->json('success');
    }

    public function show(string $id)
    {
        $tabungan = Tabungan::find($id);
    
        if (!$tabungan) {
            return redirect()->route('dashboard')->with('error', 'Data not found');
        }
    
        return view('admin.tabungan.TabunganUser', compact('tabungan'));
    }

    public function export()
    {
        return Excel::download(new TabunganExport, 'Tabungan.xlsx');
    }

    public function edit(string $id)
    {
        
    }

    public function update(Request $request, string $id)
    {
        
    }

    public function destroy(string $id)
    {
        
    }
}
