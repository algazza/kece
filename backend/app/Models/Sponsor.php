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
        'nik',
        'email',
        'alamat',
        'no_handphone',
        'bidang_usaha',
        'nama_usaha',
        'catatan',
        'jenis_sponsor',
        'jenis',
        'ip_user',
        'code',
        'pdf,'
    ];
}
