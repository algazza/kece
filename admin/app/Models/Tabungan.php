<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tabungan extends Model
{
    use HasFactory;

    protected $table = 'tabungan';

    protected $fillable = [
        'nama',
        'email',
        'no_handphone',
        'nik',
        'pekerjaan',
        'alamat',
        'catatan',
        'jenis',
        'code',
        'ip_user',
    ];
}
