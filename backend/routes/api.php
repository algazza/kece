<?php

use App\Models\Kredit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KreditController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('kredit',KreditController::class);

Route::get('/api/dashboard/kredit', [DashboardController::class, 'data']);
Route::get('/dashboard/total-data', [DashboardController::class, 'getTotalData']);


Route::get('/api/kredit', [KreditController::class, 'data']);
