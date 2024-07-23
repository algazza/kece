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
            $table->string('email')->unique();  
            $table->integer('no_handphone')->unique();
            $table->integer('nik')->unique();
            $table->string('alamat');
            $table->string('pekerjaan');
            $table->string('jumlah_pinjaman');
            $table->string('jangka_waktu');
            $table->string('bunga');
            $table->string('jenis_angunan');
            $table->string('perhitungan_bunga');
            $table->string('penghasilan_perbulan');
            $table->string('catatan');
            $table->string('kredit');
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
