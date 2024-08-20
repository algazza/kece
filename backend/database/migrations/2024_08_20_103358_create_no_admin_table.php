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
        Schema::create('no_admin', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('no_kredit');
            $table->bigInteger('no_deposit');
            $table->bigInteger('no_tabungan');
            $table->bigInteger('no_armor_property');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('no_admin');
    }
};