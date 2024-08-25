<?php

namespace App\Http\Controllers;

use App\Models\Sponsor;
use Illuminate\Http\Request;

class SponsorController extends Controller
{
    public function index(Request $request)
    {
        $jenis_sponsor = $request->input('jenis_sponsor');
    
        $sponsor = Sponsor::when($jenis_sponsor, function ($query, $jenis_sponsor) {
            return $query->where('jenis_sponsor', $jenis_sponsor);
        })->orderby('created_at', 'DESC')->paginate();
    
        return view('admin.Sponsor', compact('sponsor'));
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
