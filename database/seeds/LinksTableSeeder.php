<?php

use Illuminate\Database\Seeder;

class LinksTableSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create $numLinks links for each user. We assume that
        // the users have ids in the range [1, $numUsers].

        for($i = 1; $i <= $this->numUsers; $i++) {
            factory(App\Link::class, $this->numLinks)->create([
                'user_id' => $i
            ]);
        }
    }
}
