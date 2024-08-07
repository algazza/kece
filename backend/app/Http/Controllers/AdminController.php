<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    function viewLogin(){
        return view('admin.login.login');
    }

    function login(Request $request){
        $request->validate([
            'email' => 'required|email', 
            'password' => 'required',
        ],
        [
            'email.required' => 'Email tidak boleh kosong',
            'email.email' => 'Email harus berupa alamat email yang valid',
            'password.required' => 'Password tidak boleh kosong',
        ]);

        $infologin = [
            'email' => $request->email,
            'password' => $request->password,
        ];


        if(Auth::attempt($infologin)) {
            $user = Auth::user();

            if ($user->role == 'admin') {
                return redirect()->route('dashboard');
            } elseif ($user->role == 'kredit') {
                return redirect()->route('dashboard');
            } elseif ($user->role == 'deposit') {
                return redirect()->route('dashboard');
            }
        } else {
            Log::warning('Failed login attempt', $infologin);
            return redirect()->route('login')->withErrors('Email atau password tidak valid')->withInput();
        }
    }

    function logout(){
        Auth::logout();
        return redirect('/');
    }


    // Forget
    function forget(){
        return view('admin.login.Forget');
    }

    public function findEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:admins,email',
        ]);

        $email = $request->input('email');
        return redirect()->route('reset.form', ['email' => $email]);
    }

    public function showResetForm($email)
    {
        return view('admin.login.NewPassword', ['email' => $email]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:admins,email',
            'password' => 'required|confirmed|min:6',
        ]);

        $admin = Admin::where('email', $request->email)->first();
        if ($admin) {
            $admin->password = bcrypt($request->password);
            $admin->save();

            return redirect()->route('login')->with('success', 'Password berhasil diperbarui');
        }

        return redirect()->back()->withErrors('Email tidak ditemukan');
    }




    // Add User
    function viewAddUser(){
        return view('admin.user.UserAdd');
    }

    function store(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'no_handphone' => 'required',
            'role' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $admin = new Admin();
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->password = bcrypt($request->password);
        $admin->no_handphone = $request->no_handphone;
        $admin->role = $request->role;


        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();  
            $request->image->move(public_path('image/public'), $imageName);
            $admin->image = $imageName;
        } else {
            $admin->image = 'profil.jpg';
        }
    
        $admin->save();
        return redirect('/Admin/Add')->with('success', 'User Berhasil Ditambahkan');
    }
}

