<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DummyUsers extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userData = [
            [
                'name' => 'El Rakkai',
                'email' => 'admin@gmail.com',
                'role' => 'admin',
                'password' => bcrypt('123456')
            ],
            [
                'name' => 'Jontol nih bozz',
                'email' => 'kredit@gmail.com',
                'role' => 'kredit',
                'password' => bcrypt('123456')
            ],
            [
                'name' => 'Iatsa Villainku',
                'email' => 'deposit@gmail.com',
                'role' => 'deposit',
                'password' => bcrypt('123456')
            ],
        ];


        foreach($userData as $key => $val ){
            Admin::create($val);
        }
    }
}
