<?php

use Illuminate\Database\Seeder;

class LinkTagTableSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i <= $this->numUsers; $i++) {

            // First grab the list of id of the links and tags
            // owned be the user with id $i

            $linkIds = App\Link::where('user_id', $i)->lists('id');
            $tagIds = App\Tag::where('user_id', $i)->lists('id');

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
}
