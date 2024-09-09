<?php

use App\Models\Admin;
use App\Models\Laporan;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\SesiController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\KreditController;
use App\Http\Controllers\PickupController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\NoAdminController;
use App\Http\Controllers\SponsorController;
use App\Http\Middleware\Admin\KreditAccess;
use App\Http\Controllers\DepositoController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\TabunganController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ManajemenController;
use App\Http\Controllers\PenghargaanController;
use Illuminate\Routing\Route as RoutingRoute;

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

Route::get('/home', function(){
    return redirect('/Dashboard');
});


Route::middleware(['guest'])->group(function(){
    Route::get('/', [AdminController::class, 'viewLogin'])->name('login');
    Route::get('/forget', [AdminController::class, 'forget'])->name('forget');
    Route::post('/cari-email', [AdminController::class, 'findEmail'])->name('find.email');
    Route::get('/reset-password/{email}', [AdminController::class, 'showResetForm'])->name('reset.form');
    Route::post('/reset-password', [AdminController::class, 'resetPassword'])->name('reset.password');
    Route::post('/', [AdminController::class, 'login']);
});


Route::middleware(['auth'])->group(function(){
    // Logout
    Route::get('/logout', [AdminController::class, 'logout']); 

    // Show Admin
    Route::get('Admin/{id}/show', [AdminController::class, 'showAdmin'])->name('admin.show');

    // Dashboard
    Route::get('/Dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('AdminAkses:admin,deposit,kredit,tabungan,pickup,promosi');
    Route::get('/dashboard/{id}', [DashboardController::class, 'show'])->name('dashboard.show');
    Route::get('/api/dashboard/kredit',   [DashboardController::class, 'data']);
    Route::post('/search', [DashboardController::class, 'search'])->name('dashboard.search');
});


Route::middleware(['auth', 'AdminAkses:admin'])->group(function () {
    Route::get('/Admin',[AdminController::class, 'viewUser'])->name('admin');
    Route::get('Admin/{id}/edit',[AdminController::class, 'editAdmin'])->name('admin.edit');
    Route::put('Admin/{id}/update',[AdminController::class, 'updateAdmin'])->name('admin.update');
    Route::delete('Admin/{id}/Delete', [AdminController::class, 'destroyAdmin'])->name('admin.delete');
    Route::get('/Admin/Add', [AdminController::class, 'viewAddUser'])->name('admin.add');
    Route::post('/Admin/Add/Post', [AdminController::class, 'store'])->name('admin.post');

    // No Admin
    Route::get('/Nomor/Admin', [NoAdminController::class, 'viewNoAdmin'])->name('noAdmin');  
    Route::get('/No/{id}/Edit', [NoAdminController::class, 'editData'])->name('noAdmin.edit');
    Route::put('/No/{id}/Update', [NoAdminController::class, 'updateData'])->name('noAdmin.update');
    
    // Laporan
    Route::get('/Laporan', [LaporanController::class, 'viewLaporan'])->name('laporan.index');
    Route::delete('/Laporan/delete/{id}', [LaporanController::class, 'destroy'])->name('laporan.delete');
    Route::get('/Triwulan', [LaporanController::class, 'viewTriwulan'])->name('laporan.triwulan');
    Route::get('/Gcg', [LaporanController::class, 'viewGcg'])->name('laporan.gcg');
    Route::get('/Tahunan', [LaporanController::class, 'viewTahunan'])->name('laporan.tahunan');
    Route::post('/Laporan/post', [LaporanController::class, 'store'])->name('laporan.post');
    Route::get('/laporan/download/{filename}', [LaporanController::class, 'download']);
});

Route::middleware(['auth', 'AdminAkses:kredit,admin'])->group(function(){
    // Kredit
    Route::get('/Kredit', [KreditController::class, 'index'])->middleware('kredit.access')->name('kredit.index');
    Route::get('/kredit/{id}', [KreditController::class, 'show'])->name('kredit.show');
    Route::get('/api/check-token/kredit', [KreditController::class, 'checkToken']);
    Route::get('/api/kredit', [KreditController::class, 'data']);
    Route::get('/export/kredit', [KreditController::class, 'export'])->name('export.kredit');
});


Route::middleware(['auth', 'AdminAkses:deposito,admin'])->group(function(){
    // Deposito
    Route::get('/Deposito', [DepositoController::class, 'index'])->middleware('kredit.access')->name('deposito.index');
    Route::get('/deposito/{id}', [DepositoController::class, 'show'])->name('deposito.show');
    Route::get('/api/check-token/deposito', [DepositoController::class, 'checkToken']);
    Route::get('/api/deposito', [DepositoController::class, 'data']);
    Route::get('/export/deposito', [DepositoController::class, 'export'])->name('export.deposito');
});

Route::middleware(['auth', 'AdminAkses:tabungan,admin'])->group(function(){
    // Tabungan
    Route::get('/Tabungan', [TabunganController::class, 'index'])->middleware('kredit.access')->name('tabungan.index');
    Route::get('/tabungan/{id}', [TabunganController::class, 'show'])->name('tabungan.show');
    Route::get('/api/check-token/tabungan', [TabunganController::class, 'checkToken']);
    Route::get('/api/tabungan', [TabunganController::class, 'data']);
    Route::get('/export/tabungan', [TabunganController::class, 'export'])->name('export.tabungan');
});


Route::middleware(['auth', 'AdminAkses:pickup,admin'])->group(function(){
    // Pickup
    Route::get('/Pickup', [PickupController::class, 'index'])->middleware('kredit.access')->name('pickup.index');
    Route::get('/pickup/{id}', [PickupController::class, 'show'])->name('pickup.show');
    Route::get('/api/check-token/pickup', [PickupController::class, 'checkToken']);
    Route::get('/api/pickup', [PickupController::class, 'data']);
    Route::get('/export/pickup', [TabunganController::class, 'export'])->name('export.pickup');
});


Route::middleware(['auth', 'AdminAkses:promosi,admin'])->group(function(){
    // News
    Route::get('/News/Add', [NewsController::class, 'viewNewsAdd'])->name('news.form');
    Route::post('/News/Add/Post', [NewsController::class, 'store'])->name('news.post');
    Route::get('/News', [NewsController::class, 'viewNews'])->name('news');
    Route::get('/News/{id}/edit', [NewsController::class, 'editNews'])->name('news.edit');
    Route::put('/News/{id}', [NewsController::class, 'updateNews'])->name('news.update');
    Route::delete('/News/{id}/delete', [NewsController::class, 'destroyNews'])->name('news.delete');
    Route::get('/Sponsor', [SponsorController::class, 'index'])->name('sponsor.index');
    Route::get('/Banner', [BannerController::class, 'viewBanner'])->name('banner');
    Route::post('/Banner/Post', [BannerController::class, 'store'])->name('banner.add');
    Route::delete('/Banner/delete/{id}', [BannerController::class, 'destroy'])->name('banner.delete');
    
    Route::get('/Penghargaan', [PenghargaanController::class, 'viewPenghargaan'])->name('penghargaan.index');
    Route::get('/Penghargaan/Page/{id}', [PenghargaanController::class, 'viewPenghargaanUpdate'])->name('penghargaan.update.page');
    Route::put('/Penghargaan/Update/{id}', [PenghargaanController::class, 'update'])->name('penghargaan.update');
    Route::post('/Penghargaan/Post', [PenghargaanController::class, 'store'])->name('penghargaan.post');
    Route::delete('/Penghargaan/{id}', [PenghargaanController::class, 'destroy'])->name('penghargaan.delete');
});



Route::get('/Manajemen', [ManajemenController::class, 'viewManajemen'])->name('manajemen.index');
Route::get('/Manajemen/add', [ManajemenController::class, 'viewManajemenAdd'])->name('manajemen.add');
Route::put('/Manajemen/Update/{id}', [ManajemenController::class, 'update'])->name('manajemen.update');
Route::post('/Manajemen/Post', [ManajemenController::class, 'store'])->name('manajemen.post');
Route::delete('/Manajemen/{id}', [ManajemenController::class, 'destroy'])->name('manajemen.delete');
