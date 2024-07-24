<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KreditController;


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

Route::get('/', function(){
    return view('admin.Dashboard');
});


Route::get('/id', function(){
    return view('admin.kredit.KreditUser');
});




// Kredit
Route::get('/Kredit', [KreditController::class, 'index']);

