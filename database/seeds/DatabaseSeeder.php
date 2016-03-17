<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    protected $toTruncate = ['links', 'tags', 'link_tag', 'users'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Running seeds with truncate() will trigger a constraint 
        // violation if foreign key checks are not disabled.
        
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        foreach($this->toTruncate as $table)  {
            DB::table($table)->truncate();
        }
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');


        $this->call(UsersTableSeeder::class);
        $this->call(LinksTableSeeder::class);
        $this->call(TagsTableSeeder::class);
        $this->call(LinkTagTableSeeder::class);
    }
}
