<?php

namespace Database\Seeders;

use App\Models\RatedDeposito;
use App\Models\RatedKredit;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RatedDepositoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userData = [
            [
                'plafon' => '100000000',
                '12_bulan' => '5234000',
                '24_bulan' => '5234000',
                '36_bulan' => '2243534',
            ],
            [
                'plafon' => '200000000',
                '12_bulan' => '10468000',
                '24_bulan' => '5234000',
                '36_bulan' => '4487068',
            ],
            [
                'plafon' => '300000000',
                '12_bulan' => '15702000',
                '24_bulan' => '7851000',
                '36_bulan' => '6730602',
            ],
            [
                'plafon' => '400000000',
                '12_bulan' => '20936000',
                '24_bulan' => '10468000',
                '36_bulan' => '8974136',
            ],
            [
                'plafon' => '500000000',
                '12_bulan' => '26170000',
                '24_bulan' => '13085000',
                '36_bulan' => '11217670',
            ],
            [
                'plafon' => '600000000',
                '12_bulan' => '31404000',
                '24_bulan' => '15702000',
                '36_bulan' => '13461204',
            ],
            [
                'plafon' => '700000000',
                '12_bulan' => '36638000',
                '24_bulan' => '18319000',
                '36_bulan' => '15704738',
            ],
            [
                'plafon' => '800000000',
                '12_bulan' => '41872000',
                '24_bulan' => '20936000',
                '36_bulan' => '17948272',
            ],
            [
                'plafon' => '900000000',
                '12_bulan' => '47106000',
                '24_bulan' => '23553000',
                '36_bulan' => '20191806',
            ],
            [
                'plafon' => '1000000000',
                '12_bulan' => '52340000',
                '24_bulan' => '26170000',
                '36_bulan' => '22435340',
            ],
            [
                'plafon' => '2000000000',
                '12_bulan' => '52340000',
                '24_bulan' => '26170000',
                '36_bulan' => '22435340',
            ],
        ];

        foreach ($userData as $val) {
            RatedDeposito::create($val);
        }
    }
}
