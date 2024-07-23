<?php

namespace App\Http\Controllers\Admin\Component;

use App\Models\Banner;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BannerController extends Controller
{
    public function tampil(){
        return view ('admin.component.banner');
    }
}
