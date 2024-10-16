<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Deposito;
use Illuminate\Http\Request;
use App\Charts\deposito\KreditWeek;
use App\Exports\DepositoExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Charts\deposito\KreditMounth;

class DepositoController extends Controller
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

        $deposito = Deposito::orderBy('created_at', 'desc')->paginate(20);

        return view('admin.deposito.Deposito', [
            'deposito' => $deposito,
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
    
        $query = Deposito::orderBy('created_at', 'desc');
        if ($search) {
            $query->where('nama', 'like', "%{$search}%");
        }
    
        $deposito = $query->paginate(20);
    
        return response()->json([
            'data' => $deposito->items(),
            'pagination' => [
                'current_page' => $deposito->currentPage(),
                'last_page' => $deposito->lastPage(),
                'per_page' => $deposito->perPage(),
                'total' => $deposito->total()
            ]
        ]);
    }

    
    public function store(Request $request)
    {
        $deposito = Deposito::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'no_handphone' => $request->no_handphone,
            'nik' => $request->nik,
            'pekerjaan' => $request->pekerjaan,
            'alamat' => $request->alamat,
            'total_pinjaman' => $request->total_pinjaman,
            'jangka_waktu' => $request->jangka_waktu,
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
        $deposito = Deposito::find($id);
    
        if (!$deposito) {
            return redirect()->route('dashboard')->with('error', 'Data Deposito tidak ditemukan');
        }
    
        return view('admin.deposito.DepositoUser', compact('deposito'));
    }

    public function export()
    {
        return Excel::download(new DepositoExport, 'deposito.xlsx');
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
