<?php

use Illuminate\Database\Seeder;
use App\MenuItem;
use Illuminate\Database\Eloquent\Model;

class MenuItemTableSeeder extends  Seeder
{

    public function run()
{
    DB::table('menu_items')->delete();

    // new users users array
    $item1 = array(
        'item_name' => 'andazi',
        'price' => '100',
        'menu_id' => 1,
        'restaurant_id' => 1
    );
    $item2 = array(
        'item_name' => 'andazi',
        'price' => '100',
        'menu_id' => 1,
        'restaurant_id' => 2
    );
    $item3 = array(
            'item_name' => 'andazi',
            'price' => '100',
            'menu_id' => 1,
            'restaurant_id' => 3
        );

    MenuItem::create($item1);
    MenuItem::create($item2);
    MenuItem::create($item3);
}
}