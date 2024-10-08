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
        Schema::create('sponsor', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->bigInteger('no_handphone');
            $table->text('nama_acara');
            $table->string('tanggal_awal');
            $table->string('tanggal_akhir');
            $table->text('lokasi')->nullable();
            $table->string('file');
            $table->text('catatan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sponsor');
    }
};
