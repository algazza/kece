<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ArmorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::table('armor_property')->insert([
           'instagram' => 'https://www.instagram.com/p/DC5b-TcBuUH/?igsh=ZjFkYzMzMDQzZg==',
           'image' => 'armor1.jpg',
           'harga' => 1500000000,
           'alamat' => 'Ngaliyan',
           'alamat_lengkap' => 'Perumahan Villa Esperanza,Blok Valencia No. 18, Ngaliyan Semarang',
           'kecamatan' => 'ngaliyan',
           'bed' => 2,
           'shower' => 2,
           'luas_bangunan' => 120,
           'luas_tanah' => 140,
           'deskripsi' => 'rumah di jual cepat',
           'slug' => time()
       ]);
    }
}
