<?php

namespace Database\Seeders;

use App\Models\Banner;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $banners = [
            'banner1.jpg',
            'banner2.jpg',
            'banner3.jpg',
            'banner4.jpg',
        ];

        foreach ($banners as $banner) {
            Banner::create([
               'image' => $banner,
            ]);
        }
    }
}
