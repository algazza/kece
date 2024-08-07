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
        Schema::create('pickup', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->bigInteger('no_handphone');
            $table->bigInteger('nik');
            $table->string('pekerjaan');
            $table->string('alamat');
            $table->string('jenis');
            $table->string('produk_tabungan');
            $table->string('tanggal');
            $table->string('waktu');
            $table->string('lokasi');
            $table->string('catatan');
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
        Schema::dropIfExists('pickup');
    }
};
