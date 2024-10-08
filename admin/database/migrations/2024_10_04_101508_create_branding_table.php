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
        Schema::create('branding', function (Blueprint $table) {
            $table->id();
            $table->text('nama');
            $table->text('email');
            $table->integer('no_handphone');
            $table->text('nama_usaha');
            $table->string('bidang_usaha');
            $table->string('jenis_sponsor');
            $table->text('lokasi')->nullable();
            $table->string('file')->nullable();
            $table->text('catatan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branding');
    }
};
