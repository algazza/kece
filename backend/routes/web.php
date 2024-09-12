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
use App\Http\Controllers\DireksiController;
use App\Http\Controllers\ManajemenController;
use App\Http\Controllers\PenghargaanController;
use App\Http\Controllers\PromosiController;
use App\Http\Controllers\RatedDepositoController;
use App\Http\Controllers\RatedKreditController;
use App\Http\Controllers\StackholderController;
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
    Route::put('/Banner/update/{id}', [BannerController::class, 'update'])->name('banner.update');
    
    Route::get('/Penghargaan', [PenghargaanController::class, 'viewPenghargaan'])->name('penghargaan.index');
    Route::get('/Penghargaan/Page/{id}', [PenghargaanController::class, 'viewPenghargaanUpdate'])->name('penghargaan.update.page');
    Route::put('/Penghargaan/Update/{id}', [PenghargaanController::class, 'update'])->name('penghargaan.update');
    Route::post('/Penghargaan/Post', [PenghargaanController::class, 'store'])->name('penghargaan.post');
    Route::delete('/Penghargaan/{id}', [PenghargaanController::class, 'destroy'])->name('penghargaan.delete');
    
    Route::get('/Jabatan', function () {return view('admin.jabatan.JabatanOpt'); })->name('jabatan');

    Route::get('/Manajemen', [ManajemenController::class, 'viewManajemen'])->name('manajemen.index');
    Route::get('/Manajemen/add', [ManajemenController::class, 'viewManajemenAdd'])->name('manajemen.add');
    Route::get('/Manajemen/find/{id}', [ManajemenController::class, 'viewManajemenFind'])->name('manajemen.find');
    Route::put('/Manajemen/Update/{id}', [ManajemenController::class, 'update'])->name('manajemen.update');
    Route::post('/Manajemen/Post', [ManajemenController::class, 'store'])->name('manajemen.post');
    Route::delete('/Manajemen/{id}', [ManajemenController::class, 'destroy'])->name('manajemen.delete');

    Route::get('/Direksi', [DireksiController::class, 'viewManajemen'])->name('direksi.index');
    Route::get('/Direksi/add', [DireksiController::class, 'viewManajemenAdd'])->name('direksi.add');
    Route::get('/Direksi/find/{id}', [DireksiController::class, 'viewManajemenFind'])->name('direksi.find');
    Route::put('/Direksi/Update/{id}', [DireksiController::class, 'update'])->name('direksi.update');
    Route::post('/Direksi/Post', [DireksiController::class, 'store'])->name('direksi.post');
    Route::delete('/Direksi/{id}', [DireksiController::class, 'destroy'])->name('direksi.delete');

    Route::get('/Stackholder', [StackholderController::class, 'viewStackholder'])->name('stackholder.index');
    Route::post('/Stackholder/post', [StackholderController::class, 'store'])->name('stackholder.post');
    Route::put('/Stackholder/{id}/edit', [StackholderController::class, 'update'])->name('stackholder.update');
    Route::delete('/Stackholder/post/{id}', [StackholderController::class, 'destroy'])->name('stackholder.delete');

    Route::get('/promo', [PromosiController::class, 'viewPromosi'])->name('promosi.index');
    Route::post('/promo/add', [PromosiController::class, 'store'])->name('promosi.post');
    Route::get('/Promosi/Find/{id}', [PromosiController::class, 'find'])->name('promosi.find');
    Route::put('/Promosi/{id}/edit', [PromosiController::class, 'update'])->name('promosi.update');
    Route::delete('/Promosi/post/{id}', [PromosiController::class, 'destroy'])->name('promosi.delete');


    Route::get('/rate',[RatedDepositoController::class, 'viewDepositoRated'])->name('rated.view');
    Route::put('/rate/update', [RatedDepositoController::class, 'update'])->name('rated.deposito.update');
});





Route::get('/mboh', function(){
    return view('admin.RateDisc.rateEdit');
});


