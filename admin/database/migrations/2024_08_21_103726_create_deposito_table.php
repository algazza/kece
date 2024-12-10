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
        Schema::create('deposito', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->bigInteger('no_handphone');
            $table->bigInteger('nik');
            $table->string('pekerjaan');
            $table->text('alamat');
            $table->bigInteger('total_pinjaman')->nullable();
            $table->string('jangka_waktu')->nullable();
            $table->text('catatan')->nullable();
            $table->string('jenis')->nullable();
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
        Schema::dropIfExists('deposito');
    }
};
