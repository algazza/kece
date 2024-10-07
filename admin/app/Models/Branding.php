<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branding extends Model
{
    use HasFactory;

    protected $table = 'branding';

    protected $fillable = [
        'nama',
        'email',
        'no_handphone',
        'nama_usaha',
        'bidang_usaha',
        'jenis_sponsor',
        'lokasi',
        'file',
        'catatan'
    ];
}
