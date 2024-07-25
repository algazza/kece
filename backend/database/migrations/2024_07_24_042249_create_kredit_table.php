<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kredit', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->string('no_handphone');
            $table->string('nik');
            $table->string('pekerjaan');
            $table->string('alamat');
            $table->string('total_pinjaman');
            $table->string('jangka_waktu');
            $table->string('jenis_angunan');
            $table->string('perhitungan_bunga');
            $table->string('bunga_pertahun');
            $table->string('penghasilan_perbulan');
            $table->string('catatan');
            $table->string('jenis');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kredit');
    }
};
