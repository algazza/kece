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
        Schema::create('tabungan', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->bigInteger('no_handphone');
            $table->bigInteger('nik');
            $table->string('pekerjaan');
            $table->text('alamat');
            $table->bigInteger('total_pinjaman'); 
            $table->string('jangka_waktu');
            $table->string('jenis_angunan');
            $table->string('perhitungan_bunga');
            $table->string('penghasilan_perbulan');
            $table->text('catatan');
            $table->string('jenis');
            $table->bigInteger('code');
            $table->string('ip_user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tabungan');
    }
};
