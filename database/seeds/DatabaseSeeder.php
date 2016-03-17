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


        // First add a user named John Doe and add 10 links and 3 tags 
        // that belong to him.

        factory(App\User::class, 1)->create([
            'name' => 'John Doe',
            'email' => 'john@fake.com',
        ]);
        factory(App\Link::class, 10)->create([
            'user_id' => 1
        ]);
        factory(App\Tag::class, 3)->create([
            'user_id' => 1,
        ]);

        // Next grab all the id from the created Links and Tags
        
        $linkIds = App\Link::lists('id');
        $tagIds = App\Tag::lists('id');

        // Finally we loop through all the links and add each tag
        // to them with probability 20%

        foreach($linkIds as $linkId) {
            $link = App\Link::find($linkId);
            foreach($tagIds as $tagId) {
                if(rand(1,5) === 1) {
                    $link->tags()->sync([$tagId], false); // Setting detach to false
                }
            } 
        }
    }
}
