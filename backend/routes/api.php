<?php

use App\Models\Kredit;
use App\Models\Deposito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\KreditController;
use App\Http\Controllers\PickupController;
use App\Http\Controllers\DepositoController;
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
Route::resource('Pickup',PickupController::class);
Route::resource('deposito',DepositoController::class);


Route::get('/api/dashboard/kredit', [DashboardController::class, 'data']);
Route::get('/dashboard/total-data', [DashboardController::class, 'getTotalData']);


Route::get('/api/kredit', [KreditController::class, 'data']);
Route::get('/api/pickup', [PickupController::class, 'data']);
Route::get('/api/deposito', [DepositoController::class, 'data']);


Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{id}', [NewsController::class, 'show']);