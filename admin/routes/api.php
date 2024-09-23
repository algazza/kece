<?php

use App\Models\Kredit;
use App\Models\Deposito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PromoController;
use Database\Seeders\RatedDepositoSeeder;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\KreditController;
use App\Http\Controllers\PickupController;
use App\Http\Controllers\DireksiController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\NoAdminController;
use App\Http\Controllers\PromosiController;
use App\Http\Controllers\SponsorController;
use App\Http\Controllers\DepositoController;
use App\Http\Controllers\TabunganController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ManajemenController;
use App\Http\Controllers\PejabatEksekutifController;
use App\Http\Controllers\PenghargaanController;
use App\Http\Controllers\RatedKreditController;
use App\Http\Controllers\StackholderController;
use App\Http\Controllers\RatedDepositoController;

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
Route::resource('tabungan',TabunganController::class);
Route::resource('noAdmin',NoAdminController::class);
Route::resource('sponsor',SponsorController::class);
Route::resource('laporan',LaporanController::class);
Route::resource('penghargaan',PenghargaanController::class);
Route::resource('manajemen',ManajemenController::class);
Route::resource('direksi',DireksiController::class);
Route::resource('pejabat',PejabatEksekutifController::class);
Route::resource('stackholder',StackholderController::class);
Route::resource('ratedDeposito',RatedDepositoController::class);
Route::resource('ratedKredit',RatedKreditController::class);
Route::resource('promo',PromoController::class);


Route::get('/api/dashboard/kredit', [DashboardController::class, 'data']);
Route::get('/dashboard/total-data', [DashboardController::class, 'getTotalData']);


Route::get('/api/kredit', [KreditController::class, 'data']);
Route::get('/api/pickup', [PickupController::class, 'data']);
Route::get('/api/deposito', [DepositoController::class, 'data']);
Route::get('/api/tabungan', [DepositoController::class, 'data']);



Route::get('/banner', [BannerController::class, 'index']);
Route::get('/news', [NewsController::class, 'index']);
Route::get('/ratedKredit/update', [RatedKreditController::class, 'updateAt']);
Route::get('/news/{slug}', [NewsController::class, 'show']);
Route::get('/promo/{slug}', [PromoController::class, 'show']);
Route::get('/laporan/download/{filename}', [LaporanController::class, 'download']);