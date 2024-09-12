<?php

namespace Database\Seeders;

use App\Models\RatedKredit;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RatedKreditSeeder extends Seeder
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
            RatedKredit::create($val);
        }
    }
}
