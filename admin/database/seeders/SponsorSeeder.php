<?php

namespace Database\Seeders;

use App\Models\Sponsor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SponsorSeeder extends Seeder
{
    public function run(): void
    {
        $userData = [
            [
                'nama' => 'Nama Pertama',
                'email' => 'email1@example.com',
                'no_handphone' => 1234567890,
                'alamat' => 'Alamat Pertama',
                'bidang_usaha' => 'Bidang Usaha 1',
                'nama_usaha' => 'Nama Usaha 1',
                'catatan' => 'Banyak acara kampus atau perlombaan yang membutuhkan peran seorang LO untuk mendukung kelancaran acara. Ternyata, di dunia kerja, kita juga bisa menemukan profesi liaison officer.',
                'jenis_sponsor' => 'Nomor Meja',
                'code' => 123456,
                'jenis' => 'Jenis 1',
                'ip_user' => '192.168.1.1'
            ],
            [
                'nama' => 'Nama Kedua',
                'email' => 'email2@example.com',
                'no_handphone' => 2345678901,
                'alamat' => 'Alamat Kedua',
                'bidang_usaha' => 'Bidang Usaha 2',
                'nama_usaha' => 'Nama Usaha 2',
                'catatan' => 'Banyak acara kampus atau perlombaan yang membutuhkan peran seorang LO untuk mendukung kelancaran acara. Ternyata, di dunia kerja, kita juga bisa menemukan profesi liaison officer.',
                'jenis_sponsor' => 'Tempat Tissue / Gelas',
                'code' => 234567,
                'jenis' => 'Jenis 2',
                'ip_user' => '192.168.1.2'
            ],
        ];



        foreach($userData as $key => $val ){
            Sponsor::create($val);
        }
    }
}
