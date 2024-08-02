<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\KreditController;
use App\Http\Middleware\Admin\KreditAccess;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// Login
// Dashboard
// Dashboard
Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/dashboard/{id}', [DashboardController::class, 'show'])->name('dashboard.show');
Route::get('/api/dashboard/kredit', [DashboardController::class, 'kredit']);

// Kredit
Route::get('/kredit', [KreditController::class, 'index'])->middleware('kredit.access')->name('kredit.index');
Route::get('/kredit/{id}', [KreditController::class, 'show'])->name('kredit.show');
Route::get('/api/check-token/kredit', [KreditController::class, 'checkToken']);




















Route::get('/News', function(){
    return view ('admin.news.News');
});
Route::get('/Tabungan', function(){
    return view ('admin.tabungan.Tabungan');
});
Route::get('/Banner', function(){
    return view ('admin.Banner');
});
Route::get('/User', function(){
    return view ('admin.user.User');
});
