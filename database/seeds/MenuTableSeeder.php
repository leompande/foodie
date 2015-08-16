<?php

use Illuminate\Database\Seeder;
use App\Menu;
use Illuminate\Database\Eloquent\Model;

class MenuTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('menus')->delete();

        // new users users array
        $breakfast = array(
            'menu_name' => 'Breakfast'
        );
        $lunch = array(
            'menu_name' => 'Lunch'
        );
        $dinner = array(
            'menu_name' => 'Dinner'
        );
        $special = array(
            'menu_name' => 'Specials'
        );

        Menu::create($breakfast);
        Menu::create($lunch);
        Menu::create($dinner);
        Menu::create($special);
    }
}
