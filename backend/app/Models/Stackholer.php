<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stackholer extends Model
{
    use HasFactory;

    protected $table = 'stackholder';
    protected $fillable = [
        'image',
    ];

    
}
