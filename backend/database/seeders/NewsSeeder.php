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
        $faker = \Faker\Factory::create('id_ID');
        $userData = [];

        for ($i = 1; $i <= 20; $i++) {
            $userData[] = [
                'judul' => $faker->sentence(5, true) . ' ' . $faker->word,
                'penulis' => $faker->name,
                'keterangan' => $faker->paragraphs(rand(3, 6), true),
                'kategory' => $faker->randomElement(['Siaran Pers', 'Penghargaan', 'Promo', 'Pengumuman']),
                'image' => 'profil.jpg',
            ];
        }

        foreach($userData as $key => $val){
            News::create($val);
        }
    }
}
