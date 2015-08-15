<?php

use Illuminate\Database\Seeder;
use App\Restaurant;
use Illuminate\Database\Eloquent\Model;

class RestaurantTableSeeder extends  Seeder
{

    public function run()
    {
        DB::table('restaurants')->delete();
        // new users users array
        $rest1 = array(
            'name' => 'The Dz Restaurant',
            'location_id' => 1,
            'user_id' => 2
        );

        $rest2 = array(
            'name' => 'Millenium Sea Breez resort',
            'location_id' => 2,
            'user_id' => 4
        );

        $rest3 = array(
            'name' => 'Catalunya',
            'location_id' => 3,
            'user_id' => 3
        );

        Restaurant::create($rest1);
        Restaurant::create($rest2);
        Restaurant::create($rest3);
    }
}