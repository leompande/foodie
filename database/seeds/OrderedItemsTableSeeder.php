<?php

use Illuminate\Database\Seeder;
use App\OrderedItem;
use Illuminate\Database\Eloquent\Model;

class OrderedItemsTableSeeder extends Seeder{
    public function run()
    {


        DB::table('ordered_items')->delete();
        // new users users array
        $order1 = array(
            'delivery_time' => '2015-08-15 14:49:13',
            'order_id' => 1,
            'menu_id' => 1,
            'quantity' => 2,
            'total_price' => 1000
        );

        OrderedItem::create($order1);
    }
} 