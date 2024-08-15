<?php
namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Kredit;
use Illuminate\Http\Request;
use App\Charts\kredit\KreditWeek;
use App\Charts\kredit\KreditMounth;

class KreditController extends Controller
{
    public function __construct()
    {
        $this->middleware('kredit.access')->only('index');
    }

    public function index(Request $request, KreditWeek $chart, KreditMounth $chartMonth)
    {
        $token = bin2hex(random_bytes(32));
        $tokenExpiry = Carbon::now()->addSeconds(10);

        $request->session()->put('kredit_access_token', $token);
        $request->session()->put('kredit_access_expiry', $tokenExpiry);
        $request->session()->put('last_dashboard_visit', Carbon::now());

        $kredit = Kredit::orderBy('created_at', 'desc')->paginate(20);

        return view('admin.kredit.Kredit', [
            'kredit' => $kredit,
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
        $kredit = Kredit::orderBy('created_at', 'desc')->paginate(20);

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
            'penghasilan_perbulan' => $request->penghasilan_perbulan,
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
        $kredit = Kredit::find($id);
    
        if (!$kredit) {
            return redirect()->route('dashboard')->with('error', 'Data not found');
        }
    
        return view('admin.kredit.KreditUser', compact('kredit'));
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

