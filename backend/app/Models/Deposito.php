<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deposito extends Model
{
    use HasFactory;

    protected $table = 'deposito';

    protected $fillable = [
        'nama',
        'email',
        'no_handphone',
        'nik',
        'pekerjaan',
        'alamat',
        'total_pinjaman',
        'jangka_waktu',
        'jenis_angunan',
        'perhitungan_bunga',
        'penghasilan_perbulan',
        'catatan',
        'jenis',
        'code',
        'ip_user',
    ];
}
