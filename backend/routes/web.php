<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SesiController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\KreditController;
use App\Http\Middleware\Admin\KreditAccess;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
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

Route::middleware(['guest'])->group(function(){
    Route::get('/', [AdminController::class, 'index'])->name('login');
    Route::post('/', [AdminController::class, 'login']);
});


Route::middleware(['auth'])->group(function(){

    // Dashboard
    Route::get('/Dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('AdminAkses:admin,deposit,kredit');
    Route::get('/dashboard/{id}', [DashboardController::class, 'show'])->name('dashboard.show');
    Route::get('/api/dashboard/kredit',   [DashboardController::class, 'kredit']);


    // Kredit
    Route::get('/Kredit', [KreditController::class, 'index'])->middleware('kredit.access')->name('kredit.index');
    Route::get('/kredit/{id}', [KreditController::class, 'show'])->name('kredit.show');
    Route::get('/api/check-token/kredit', [KreditController::class, 'checkToken']);

    Route::get('/logout', [AdminController::class, 'logout']); 
});



















Route::get('/News', function(){
    return view ('admin.news.News');
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
Route::get('/User', function(){
    return view ('admin.user.User');
});
Route::get('/Usere', function(){
    return view ('admin.user.UserEdit');
});
