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
                'no_induk' => '81327890199',
            ],
        ];


        foreach($userData as $key => $val ){
            NoAdmin::create($val);
        }
    }
}
