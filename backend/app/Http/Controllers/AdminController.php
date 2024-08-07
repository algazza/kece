<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller
{
    function viewLogin(){
        return view('admin.login');
    }

    function viewAddUser(){
        return view('admin.user.UserAdd');
    }


    function store(Request $request){
        $request->validate([

        ]);
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
}

