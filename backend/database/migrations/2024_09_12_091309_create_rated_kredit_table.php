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
        Schema::create('rated_kredit', function (Blueprint $table) {
            $table->id();
            $table->integer('plafon');
            $table->integer('12_bulan');
            $table->integer('24_bulan');
            $table->integer('36_bulan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rated_kredit');
    }
};
