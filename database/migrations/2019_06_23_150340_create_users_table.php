<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nid')->nullable();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('race')->nullable();
            $table->integer('age')->nullable();
            $table->integer('sons')->nullable();
            $table->integer('salary')->nullable();
            $table->string('position')->nullable();
            $table->enum('sexo', ['male', 'female']);
            $table->dateTime('birthday')->nullable();
            $table->string('username', 25);
            $table->string('password');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('type')->default('user');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
