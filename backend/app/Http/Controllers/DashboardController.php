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

    public function kredit(Request $request)
    {
        $kredit = Kredit::orderBy('created_at', 'desc')->paginate(10);
        
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
