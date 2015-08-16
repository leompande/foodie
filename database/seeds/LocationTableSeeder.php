<?php

use Illuminate\Database\Seeder;
use App\Location;
use Illuminate\Database\Eloquent\Model;


class LocationTableSeeder extends  Seeder
{

    public function run()
    {
        DB::table('locations')->delete();
        // new users users array
        $bag1 = array(
            'location_name' => 'Bagamoyo',
            'longitude' => '38.9054793',
            'latitude' => '-6.4456314'
        );

        $bag2 = array(
            'location_name' => 'Bagamoyo',
            'longitude' => '38.9154246',
            'latitude' => '-6.4472349'
        );

        $dar = array(
            'location_name' => 'Dar es salaam',
            'longitude' => '39.2229912',
            'latitude' => '-6.7729272'
        );

        Location::create($bag1);
        Location::create($bag2);
        Location::create($dar);
    }
}