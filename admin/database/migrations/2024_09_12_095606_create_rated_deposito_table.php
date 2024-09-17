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
        Schema::create('rated_deposito', function (Blueprint $table) {
            $table->id();
            $table->integer('plafon');
            $table->integer('bulan_12');
            $table->integer('bulan_24');
            $table->integer('bulan_36');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rated_deposito');
    }
};
