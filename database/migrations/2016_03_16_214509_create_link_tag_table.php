<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinkTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Use singular of the correlated tables, with alphabetical order
        Schema::create('link_tag', function (Blueprint $table) {
            $table->integer('link_id')->unsigned()->index();
            $table->integer('tag_id')->unsigned()->index();

            // When we delete an article or a link delete it's associated
            // row in the pivot table
            $table->foreign('link_id')->references('id')->on('links')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');

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
        Schema::drop('link_tag');
    }
}
