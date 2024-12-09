<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
           DummyUsers::class,
           NewsSeeder::class,
           NoAdminSeeder::class,
            MitraKamiSeeder::class,
            PromoSeeder::class,
            ArmorSeeder::class,
            BannerSeeder::class,
            LaporanSeeder::class,
            JabatanSeeder::class,
        ]);
    }
}
