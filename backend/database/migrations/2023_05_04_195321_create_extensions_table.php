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
        Schema::create('extensions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('programTitle')->unique();
            $table->date('startDate');
            $table->date('endDate');
            $table->string('place');
            $table->string('programLead');
            $table->string('programMembers');
            $table->string('participants');
            $table->string('programFlow');
            $table->string('programDetails');
            $table->string('partners');
            $table->string('certPath');
            $table->string('attendancePath');
            $table->string('invitationPath');
            $table->string('Others');
            $table->string('isArchive', 1);
            $table->timestamps();
        });

        Schema::table('extensions', function (Blueprint $table) {
            $table->foreign('partners')->references('partnersName')->on('partners');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('extensions');
    }
};
