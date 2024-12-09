<?php

namespace Database\Seeders;

use App\Models\Direksi;
use App\Models\Manajemen;
use App\Models\PejabatEksekutif;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JabatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $direksis = [
            [
                'nama' => 'Darmawan, S.Sos, M.M',
                'jabatan' => 'Direktur Utama',
                'deskripsi' => 'Karir di BPR Arto Moro dimulai 01 September 2018 dengan menjadi Kepala Kantor Kas Kalipancur selama kurang lebih 8 (delapan) bulan. Selanjutnya pada 09 Mei 2019 secara resmi diangkat sebagai Direktur Utama Bank Perkreditan Rakyat Arto Moro oleh Pemegang Saham PT. BPR Arto Moro.',
                'image' => 'darmawan.png'
            ],
            [
                'nama' => 'Ruspito Nugroho, A.Md',
                'jabatan' => 'Direktur',
                'deskripsi' => 'Karir di BPR Arto Moro dimulai pada tahun 2017 dengan menjadi Kasie Kredit, Kepala Bagian Operasional, dan saat ini diangkat secara resmi pada tanggal 17 November 2022 sebagai Direktur Operasional dan Kepatuhan Bank Perkreditan Rakyat Arto Moro oleh Pemegang Saham PT. BPR Arto Moro Semarang.',
                'image' => 'ruspito.png'
            ],
        ];

        $pejabats = [
            [
                'nama' => 'Prof. Dr. H. Subyakto, SH, MH, MM',
                'jabatan' => 'komisaris utama',
                'deskripsi' => 'Dengan pengalaman panjang yang terentang di berbagai bidang keilmuan, jejaring yang luas dan beragam, visi Prof. Dr. H. Subyakto, SH, MH, MM adalah membawa BPR Arto Moro menjadi BPR terdepan, terbaik, terpercaya dan membawa manfaat sertakebaikan bagi masyarakat Semarang dan Jawa Tengah pada umumnya. Kesungguhan dan komitmen beliau mewujudkan visi tersebut akhirnya membuahkan pengakuan dan penghargaan oleh majalah Infobank. Selama 2 tahun berturut-turut, BPR Arto Moro sukses terpilih sebagai BPR terbaik untuk Kategori Kinerja Keuangan Terbaik.',
                'image' => 'subyakto.png'
            ],
            [
                'nama' => 'SLAMET ARISNO, SH',
                'jabatan' => 'komisaris',
                'deskripsi' => 'Beliau memiliki pengalaman panjang selama puluhan tahun sebagai birokat, antara lain pernah menjadi Kepala Bea dan Cukai Singkawang dan Kepala Bea dan Cukai Cirebon. Kemampuan diplomasi beliau tidak diragukan lagi karena sering berhubungan dengan negara tetangga (Malaysia) dalam rangka koordinasi, pengawasan daerah perbatasan antara Bea dan Cukai Indonesia dan Custom Diraja Malaysia. Beliau termasuk salah satu pejabat yang dipercaya oleh Dirjen Bea dan Cukai untuk melakukan study banding kinerja surveyor yang dikontrak oleh Pemerintah Indonesia di Jepang sebelum diambil alih kembali oleh Pemerintah Indonesia',
                'image' => 'slamet.png'
            ],
        ];


        $ekseskutifs = [
            [
                'nama' => 'Bagus Nandang S',
                'jabatan' => 'Kabag Kredit',
                'image' => 'bagus.png'
            ],
            [
                'nama' => 'Agnes Niken',
                'jabatan' => 'Kabag Opperasional',
                'image' => 'agnes.png'
            ],
            [
                'nama' => 'Riska Irmaningtyas',
                'jabatan' => 'Kabag Manrisk',
                'image' => 'riska.png'
            ],
            [
                'nama' => 'Fandil',
                'jabatan' => 'Kabag Funding',
                'image' => 'fandil.png'
            ],
            [
                'nama' => 'Sugiarno',
                'jabatan' => 'Kabag SDM & Pengembangan',
                'image' => 'sugiarno.png'
            ],
            [
                'nama' => 'Debora Yuliana',
                'jabatan' => 'Kabag SPI',
                'image' => 'debora.png'
            ],
        ];

        foreach ($direksis as $direksi) {
            Direksi::create($direksi);
        }
        foreach ($ekseskutifs as $ekseskutif) {
            PejabatEksekutif::create($ekseskutif);
        }
        foreach ($pejabats as $pejabat) {
            Manajemen::create($pejabat);
        }
    }


}
