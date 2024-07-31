<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Kredit;
use App\Charts\KreditChart;
use Illuminate\Http\Request;
use App\Events\KreditCreated;
use Illuminate\Support\Facades\Log;

class KreditController extends Controller
{

    public function __construct()
    {
        $this->middleware('kredit.access')->only('index');
    }

    public function index(Request $request, KreditChart $chart)
    {
        $token = bin2hex(random_bytes(32));
        $tokenExpiry = Carbon::now()->addSeconds(5);
    
        $request->session()->put('kredit_access_token', $token);
        $request->session()->put('kredit_access_expiry', $tokenExpiry);
        $request->session()->put('last_dashboard_visit', Carbon::now());
    
        $kredit = Kredit::orderBy('created_at', 'desc')->get();
        return view('admin.kredit.Kredit', [
            'kredit' => $kredit,
            'chart' => $chart->build(),
            'token' => $token,
        ]);
    }    

    public function checkToken(Request $request)
    {
        $token = $request->header('Authorization');
        Log::info('Authorization header:', ['token' => $token]);
    
        if (!$token) {
            Log::error('Authorization token missing');
            return response()->json(['expired' => true], 401);
        }
    
        $token = str_replace('Bearer ', '', $token);
    
        $storedToken = $request->session()->get('kredit_access_token');
        $tokenExpiry = $request->session()->get('kredit_access_expiry');
        $currentTime = Carbon::now();
    
        Log::info('Check Token', [
            'storedToken' => $storedToken,
            'tokenExpiry' => $tokenExpiry,
            'currentTime' => $currentTime,
        ]);
    
        if ($token !== $storedToken || !$tokenExpiry || $currentTime->greaterThan(Carbon::parse($tokenExpiry))) {
            Log::info('Token expired or invalid');
            return response()->json(['expired' => true]);
        }
    
        Log::info('Token valid');
        return response()->json(['expired' => false]);
    }    

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        $kredit = Kredit::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'no_handphone' => $request->no_handphone,
            'nik' => $request->nik,
            'pekerjaan' => $request->pekerjaan,
            'alamat' => $request->alamat,
            'total_pinjaman' => $request->total_pinjaman,
            'jangka_waktu' => $request->jangka_waktu,
            'jenis_angunan' => $request->jenis_angunan,
            'perhitungan_bunga' => $request->perhitungan_bunga,
            'bunga_pertahun' => $request->bunga_pertahun,
            'penghasilan_perbulan' => $request->penghasilan_perbulan,
            'catatan' => $request->catatan,
            'jenis' => $request->jenis,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    
        return response()->json('success');
    }

    public function show(string $id)
    {
        $kredit = Kredit::find($id);
    
        if (!$kredit) {
            return redirect()->route('dashboard')->with('error', 'Data not found');
        }
    
        return view('admin.kredit.KreditUser', compact('kredit'));
    }

    public function edit(string $id)
    {
        //
    }


    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }


}
