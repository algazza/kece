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
                'plafon' => '100000000',
                'bulan_12' => '5234000',
                'bulan_24' => '5234000',
                'bulan_36' => '2243534',
            ],
            [
                'plafon' => '200000000',
                'bulan_12' => '10468000',
                'bulan_24' => '5234000',
                'bulan_36' => '4487068',
            ],
            [
                'plafon' => '300000000',
                'bulan_12' => '15702000',
                'bulan_24' => '7851000',
                'bulan_36' => '6730602',
            ],
            [
                'plafon' => '400000000',
                'bulan_12' => '20936000',
                'bulan_24' => '10468000',
                'bulan_36' => '8974136',
            ],
            [
                'plafon' => '500000000',
                'bulan_12' => '26170000',
                'bulan_24' => '13085000',
                'bulan_36' => '11217670',
            ],
            [
                'plafon' => '600000000',
                'bulan_12' => '31404000',
                'bulan_24' => '15702000',
                'bulan_36' => '13461204',
            ],
            [
                'plafon' => '700000000',
                'bulan_12' => '36638000',
                'bulan_24' => '18319000',
                'bulan_36' => '15704738',
            ],
            [
                'plafon' => '800000000',
                'bulan_12' => '41872000',
                'bulan_24' => '20936000',
                'bulan_36' => '17948272',
            ],
            [
                'plafon' => '900000000',
                'bulan_12' => '47106000',
                'bulan_24' => '23553000',
                'bulan_36' => '20191806',
            ],
            [
                'plafon' => '1000000000',
                'bulan_12' => '52340000',
                'bulan_24' => '26170000',
                'bulan_36' => '22435340',
            ],
            [
                'plafon' => '2000000000',
                'bulan_12' => '52340000',
                'bulan_24' => '26170000',
                'bulan_36' => '22435340',
            ],
        ];

        foreach ($userData as $val) {
            RatedKredit::create($val);
        }
    }
}
