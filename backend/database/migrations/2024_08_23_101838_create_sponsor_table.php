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
            $table->bigInteger('nik');
            $table->string('alamat');
            $table->string('bidang_usaha');
            $table->bigInteger('nama_usaha');
            $table->string('catatan');
            $table->text('jenis_sponsor');
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
