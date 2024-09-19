<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoAdmin extends Model
{
    use HasFactory;

    protected $table = 'no_admin';


    protected $fillable = [
        'no_induk',
    ];
}