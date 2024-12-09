<?php

namespace Database\Seeders;

use App\Models\Promo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PromoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $promos = [
            [
                'judul' => 'BUTUH KREDIT CEPAT?',
                'keterangan' => 'Bersama kredit multiguna Bank Arto Moro siap bantu penuhi kebutuhan anda',
                'tanggal' => '2024-12-10',
                'image' => 'promo1.png',
                'slug' => 'butuh-kredit-cepat',
            ],
            [
                'judul' => 'SEPTEMBER CERIA',
                'keterangan' => 'kredit dan deposit di arto moro membuat anda lebih ceria',
                'tanggal' => '2024-12-10',
                'image' => 'promo2.png',
                'slug' => 'september-ceria',
            ],
        ];

        foreach($promos as $key => $val){
            Promo::create($val);
        }
    }
}
