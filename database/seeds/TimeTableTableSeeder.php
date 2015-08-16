<?php

use Illuminate\Database\Seeder;
use App\Timetable;
use Illuminate\Database\Eloquent\Model;


class TimeTableTableSeeder extends  Seeder
{

    public function run()
    {
        DB::table('timetables')->delete();
        // new users users array
        $bag1 = array(
            'restaurant_id' =>1,
            'weekdays' => '7:00 AM - 10:00 PM',
            'weekend' => '7:00 AM - 10:00 PM',
            'holiday' => '7:00 AM - 10:00 PM'
        );
        Timetable::create($bag1);

        $bag2 = array(
            'restaurant_id' =>2,
            'weekdays' => '7:00 AM - 10:00 PM',
            'weekend' => '7:00 AM - 10:00 PM',
            'holiday' => '7:00 AM - 10:00 PM'
        );
        Timetable::create($bag2);

        $bag3 = array(
            'restaurant_id' =>3,
            'weekdays' => '7:00 AM - 10:00 PM',
            'weekend' => '7:00 AM - 10:00 PM',
            'holiday' => '7:00 AM - 10:00 PM'
        );
        Timetable::create($bag3);

        $bag4 = array(
            'restaurant_id' =>4,
            'weekdays' => '7:00 AM - 10:00 PM',
            'weekend' => '7:00 AM - 10:00 PM',
            'holiday' => '7:00 AM - 10:00 PM'
        );
        Timetable::create($bag4);
    }
}