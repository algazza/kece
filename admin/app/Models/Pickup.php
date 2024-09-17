<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pickup extends Model
{
    use HasFactory;

    protected $table = 'pickup';

    protected $fillable = [
        'nama',
        'email',
        'no_handphone',
        'nik',
        'pekerjaan',
        'alamat',
        'produk_tabungan',
        'tanggal',
        'waktu',
        'lokasi',
        'catatan',
        'jenis',
        'code',
        'ip_user',
    ];
}

