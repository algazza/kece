<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KreditController;
use App\Http\Controllers\DashboardController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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
Route::get('/', [DashboardController::class, 'index']);


// Kredit

Route::get('/Kredit', [KreditController::class, 'index']);
Route::get('/Kredit/{id}', [KreditController::class, 'show'])->name('kredit.show');
Route::get('/api/kredit', [DashboardController::class, 'kredit']);

