<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArmorProperty extends Model
{
    use HasFactory;

    protected $table = 'armor_property';

    protected $fillable = [
        'instagram',
        'image',
        'harga',
        'alamat',
        'alamat_lengkap',
        'kecamatan',
        'bed',
        'shower',
        'luas_bangunan',
        'luas_tanah',
        'deskripsi'
    ];
}
