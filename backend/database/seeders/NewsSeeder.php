<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userData = [
            [
                'judul' => 'El Rakkai',
                'email' => 'admin@gmail.com',
                'role' => 'admin',
                'no_handphone' => '088997998998',
                'image' => 'profil.jpg',
                'password' => bcrypt('123456')
            ],
            [
                'name' => 'Iatsa Villainku',
                'email' => 'deposit@gmail.com',
                'role' => 'deposito',
                'no_handphone' => '088997998998',
                'image' => 'profil.jpg',
                'password' => bcrypt('123456')
            ],
        ];

        foreach($userData as $key => $val){
            News::create($val);
        }
    }
}
