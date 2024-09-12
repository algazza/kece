<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RatedDeposito extends Model
{
    use HasFactory;

    protected $table = 'rated_deposito';
    protected $fillable = [
        'plafon',
        '12_bulan',
        '24_bulan',
        '36_bulan',
    ];
}
