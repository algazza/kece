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
// Dashboard
Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

// Kredit
Route::get('/Kredit', [KreditController::class, 'index'])->middleware('kredit.access')->name('kredit.index');
Route::get('/kredit/{id}', [KreditController::class, 'show'])->name('kredit.show');
Route::get('/api/kredit', [DashboardController::class, 'kredit']);
Route::get('/kredit/check-token', [KreditController::class, 'checkToken'])->name('kredit.check-token');
