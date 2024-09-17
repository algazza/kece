<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RatedKredit extends Model
{
    use HasFactory;
    protected $table = 'rated_kredit';
    protected $fillable = [
        'plafon',
        'bulan_12',
        'bulan_24',
        'bulan_36',
    ];
}
