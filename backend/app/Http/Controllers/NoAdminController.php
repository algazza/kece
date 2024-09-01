<?php

namespace App\Http\Controllers;

use App\Models\NoAdmin;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

class NoAdminController extends Controller
{
    public function viewNoAdmin(){
        $noAdmin = NoAdmin::orderBy('created_at', 'DESC')->first();
        return view('admin.no_admin.noAdmin', compact('noAdmin'));
    }


    public function editData(Request $request, $id) {
        $noAdmin = NoAdmin::find($id);

        if(!$noAdmin){
            return redirect()->route('noAdmin');
        }

        return view('admin.no_admin.noAdminEdit', compact('noAdmin'));
    }


    public function updateData(Request $request, $id)
    {
        try {
            $noAdmin = NoAdmin::findOrFail($id);
    
            $validateData = $request->validate([
                'no_kredit' => 'required|integer',
                'no_deposito' => 'required|integer',
                'no_tabungan' => 'required|integer',
                'no_induk' => 'required|integer',
                'no_sponsor' => 'required|integer',
                'no_pickup' => 'required|integer'
            ]);
    
            $noAdmin->update($validateData);
        
            return redirect()->route('noAdmin')->with('success', 'Data berhasil di perbarui');

        } catch (\Exception $e) {
            return redirect()->route('noAdmin')->with('error','Nomer terlalu banyak');
        }
    }


    public function index(){
        $noAdmin = NoAdmin::orderBy('created_at', 'DESC')->first();
        return response()->json($noAdmin);
    }
    
}
