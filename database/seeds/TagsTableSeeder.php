<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create $numTags tags for each user. We assume that
        // the users have ids in the range [1, $numUsers].

        for($i = 1; $i <= $this->numUsers; $i++) {
            factory(App\Tag::class, $this->numTags)->create([
                'user_id' => $i
            ]);
        }
    }
}
