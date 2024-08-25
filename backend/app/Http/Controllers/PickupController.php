<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Pickup;
use Illuminate\Http\Request;
use App\Charts\pickup\KreditWeek;
use App\Charts\pickup\KreditMounth;

class PickupController extends Controller
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

        $pickup = Pickup::orderBy('created_at', 'desc')->paginate(20);

        return view('admin.pickup.Pickup', [
            'kredit' => $pickup,
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
    
        $query = Pickup::orderBy('created_at', 'desc');
        if ($search) {
            $query->where('nama', 'like', "%{$search}%");
        }
    
        $pickup = $query->paginate(20);
    
        return response()->json([
            'data' => $pickup->items(),
            'pagination' => [
                'current_page' => $pickup->currentPage(),
                'last_page' => $pickup->lastPage(),
                'per_page' => $pickup->perPage(),
                'total' => $pickup->total()
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $pickup = Pickup::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'no_handphone' => $request->no_handphone,
            'nik' => $request->nik,
            'pekerjaan' => $request->pekerjaan,
            'alamat' => $request->alamat,
            'produk_tabungan' => $request->produk_tabungan,
            'tanggal' => $request->tanggal,
            'waktu' => $request->waktu,
            'lokasi' => $request->lokasi,
            'catatan' => $request->catatan,
            'jenis' => $request->jenis,
            'code' => $request->code,
            'ip_user' => $request->ip_user,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    
        return response()->json('success');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $pickup = Pickup::find($id);
    
        if (!$pickup) {
            return redirect()->route('dashboard')->with('error', 'Data not found');
        }
    
        return view('admin.pickup.PickupUser', compact('pickup'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
