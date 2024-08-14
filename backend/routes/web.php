<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SesiController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\KreditController;
use App\Http\Middleware\Admin\KreditAccess;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PickupController;
use App\Models\Admin;
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

// Route::get('/admin', function(){
//     return redirect('/logout');
// });

// web.php
Route::middleware(['guest'])->group(function(){
    Route::get('/', [AdminController::class, 'viewLogin'])->name('login');
    Route::get('/forget', [AdminController::class, 'forget'])->name('forget');
    Route::post('/cari-email', [AdminController::class, 'findEmail'])->name('find.email');
    Route::get('/reset-password/{email}', [AdminController::class, 'showResetForm'])->name('reset.form');
    Route::post('/reset-password', [AdminController::class, 'resetPassword'])->name('reset.password');
    Route::post('/', [AdminController::class, 'login']);
});


Route::middleware(['auth'])->group(function(){

    // Login and Admin 
    Route::get('/logout', [AdminController::class, 'logout']); 

    Route::get('/Admin',[AdminController::class, 'viewUser'])->name('admin');
    Route::get('Admin/{id}/edit',[AdminController::class, 'editAdmin'])->name('admin.edit');
    Route::put('Admin/{id}/update',[AdminController::class, 'updateAdmin'])->name('admin.update');
    Route::delete('Admin/{id}/Delete', [AdminController::class, 'destroyAdmin'])->name('admin.delete');


    Route::get('/Admin/Add', [AdminController::class, 'viewAddUser'])->name('admin.add');
    Route::post('/Admin/Add/Post', [AdminController::class, 'store'])->name('admin.post');

    // Dashboard
    Route::get('/Dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('AdminAkses:admin,deposit,kredit');
    Route::get('/dashboard/{id}', [DashboardController::class, 'show'])->name('dashboard.show');
    Route::get('/api/dashboard/kredit',   [DashboardController::class, 'data']);


    // Kredit
    Route::get('/Kredit', [KreditController::class, 'index'])->middleware('kredit.access')->name('kredit.index');
    Route::get('/kredit/{id}', [KreditController::class, 'show'])->name('kredit.show');
    Route::get('/api/check-token/kredit', [KreditController::class, 'checkToken']);
    Route::get('/api/kredit', [KreditController::class, 'data']);


    // Pickup
    Route::get('/Pickup', [PickupController::class, 'index'])->middleware('kredit.access')->name('pickup.index');
    Route::get('/pickup/{id}', [PickupController::class, 'show'])->name('pickup.show');
    Route::get('/api/check-token/pickup', [PickupController::class, 'checkToken']);
    Route::get('/api/pickup', [PickupController::class, 'data']);


    // News
    Route::get('/News/Add', [NewsController::class, 'viewNewsAdd'])->name('news.form');
    Route::post('/News/Add/Post', [NewsController::class, 'store'])->name('news.post');

    Route::get('/News', [NewsController::class, 'viewNews'])->name('news');
    Route::get('/News/{id}/edit', [NewsController::class, 'editNews'])->name('news.edit');
    Route::put('/News/{id}', [NewsController::class, 'updateNews'])->name('news.update');
    Route::delete('/News/{id}/delete', [NewsController::class, 'destroyNews'])->name('news.delete');
});



















Route::get('/Newse', function(){
    return view ('admin.news.NewsEdit');
});
Route::get('/Tabungan', function(){
    return view ('admin.tabungan.Tabungan');
});
Route::get('/Banner', function(){
    return view ('admin.banner.Banner');
});
Route::get('/Bannere', function(){
    return view ('admin.banner.BannerEdit');
});
Route::get('/Usere', function(){
    return view ('admin.user.UserAdd');
});
Route::get('/Adminn', function(){
    return view ('admin.user.Admin');
});
Route::get('/sp', function(){
    return view ('admin.Sponsor');
});
