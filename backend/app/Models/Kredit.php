<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kredit extends Model
{
    use HasFactory;

    protected $table = 'kredit';

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
        'bunga_pertahun',
        'penghasilan_perbulan',
        'catatan',
        'jenis',
        'code',
    ];
}
