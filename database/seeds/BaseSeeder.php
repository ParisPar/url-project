<?php

use Illuminate\Database\Seeder;

class BaseSeeder extends Seeder
{
    protected $numUsers = 2;
    protected $numLinks = 10; // The number of links to be created for each user
    protected $numTags = 3; // The number of tags to be created for each user

    protected function users()
    {
        return  [
            (object)[
                'name' => 'John Doe',
                'email' => 'john@fake.com'
            ],
            (object)[
                'name' => 'Jane Doe',
                'email' => 'jane@fake.com'
            ]
        ];
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
    }
}
