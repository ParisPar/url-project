<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = $this->users();
        
        foreach($users as $user) {
            factory(App\User::class, 1)->create([
                'name' => $user->name,
                'email' => $user->email,
            ]);
        }
    }
}
