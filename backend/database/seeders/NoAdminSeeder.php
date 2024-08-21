<?php

namespace Database\Seeders;

use App\Models\NoAdmin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NoAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userData = [
            [
                'no_kredit' => '088998998',
                'no_deposit' => '0998998',
                'no_tabungan' => '07998998',
                'no_armor_property' => '97998998',
            ],
        ];


        foreach($userData as $key => $val ){
            NoAdmin::create($val);
        }
    }
}
