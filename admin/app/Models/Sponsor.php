<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sponsor extends Model
{
    use HasFactory;

    protected $table = 'sponsor';

    protected $fillable = [
        'nama',
        'email',
        'no_handphone',
        'nama_acara',
        'tanggal_awal',
        'tanggal_akhir',
        'lokasi',
        'file',
        'catatan'
    ];
}
