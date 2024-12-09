<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MitraKamiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $images = [
            'ojk.svg',
            'lps.svg',
            'bca.svg',
            'bjb.svg',
            'jateng.svg',
            'cimbniaga.svg',
            'reliance.svg'
        ];

        foreach ($images as $image) {
            DB::table('stackholder')->insert([
                'image' => $image,
            ]);
        }
    }
}
