<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KreditController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\Admin\KreditAccess;

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

// Dashboard
Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

// Kredit
Route::get('/Kredit', [KreditController::class, 'index'])->middleware('kredit.access')->name('kredit.index');
Route::get('/kredit/{id}', [KreditController::class, 'show'])->name('kredit.show');
Route::get('/api/kredit', [DashboardController::class, 'kredit']);
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
