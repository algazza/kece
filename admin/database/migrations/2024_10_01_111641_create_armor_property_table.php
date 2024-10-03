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
        Schema::create('armor_property', function (Blueprint $table) {
            $table->id();
            $table->text('instagram');
            $table->string('image');
            $table->text('harga');
            $table->string('alamat');
            $table->text('alamat_lengkap');
            $table->text('kecamatan');
            $table->integer('bed');
            $table->integer('shower');
            $table->integer('luas_bangunan');
            $table->integer('luas_tanah');
            $table->text('deskripsi');
            $table->bigInteger('slug');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('armor_property');
    }
};
