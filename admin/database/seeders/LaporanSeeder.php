<?php

namespace Database\Seeders;

use App\Models\Laporan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LaporanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $laporanGCG =[
            [
                'file_laporan' => 'Laporan GCG 2021.pdf',
                'tanggal' => '2021',
                'jenis_laporan' => 'GCG',
            ],
            [
                'file_laporan' => 'Laporan GCG 2022.pdf',
                'tanggal' => '2022',
                'jenis_laporan' => 'GCG',
            ],
            [
                'file_laporan' => 'Laporan GCG 2023.pdf',
                'tanggal' => '2023',
                'jenis_laporan' => 'GCG',
            ],
        ];

        foreach ($laporanGCG as $laporan) {
            Laporan::create($laporan);
        }
    }
}
