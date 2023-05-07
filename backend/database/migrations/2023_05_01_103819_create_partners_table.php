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
        Schema::create('partners', function (Blueprint $table) {
            $table->increments('id');
            $table->string('partnersName')->unique();
            $table->string('address');
            $table->string('contactPerson');
            $table->string('contactNo');
            $table->date('startDate');
            $table->date('endDate');
            $table->string('isArchive', 1);
            $table->string('moaPath');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
};
