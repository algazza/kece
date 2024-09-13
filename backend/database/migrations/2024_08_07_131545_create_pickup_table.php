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
            $table->text('alamat');
            $table->string('jenis')->nullable();
            $table->string('produk_tabungan')->nullable();
            $table->string('tanggal')->nullable();
            $table->string('waktu')->nullable();
            $table->text('lokasi')->nullable();
            $table->text('catatan')->nullable();
            $table->bigInteger('code')->nullable();
            $table->string('ip_user')->nullable();
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
