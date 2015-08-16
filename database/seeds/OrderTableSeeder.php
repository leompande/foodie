<?php

use Illuminate\Database\Seeder;
use App\Order;
use Illuminate\Database\Eloquent\Model;

class OrderTableSeeder extends Seeder{
    public function run()
    {
        DB::table('orders')->delete();
        // new users users array
        $order1 = array(
            'delivery_time' => '2015-08-15 14:49:13',
            'restaurant_id' => '1',
            'client_id' => '1',
            'delivery_type' => 'Delivery',
            'order_status' => 'new'
        );
        $order2 = array(
            'delivery_time' => '2015-08-15 14:49:13',
            'restaurant_id' => '1',
            'client_id' => '2',
            'delivery_type' => 'Delivery',
            'order_status' => 'new'
        );
        $order3 = array(
            'delivery_time' => '2015-08-15 14:49:13',
            'restaurant_id' => '2',
            'client_id' => '1',
            'delivery_type' => 'Delivery',
            'order_status' => 'new'
        );
        $order4 = array(
            'delivery_time' => '2015-08-15 14:49:13',
            'restaurant_id' => '1',
            'client_id' => '1',
            'delivery_type' => 'Delivery',
            'order_status' => 'new'
        );

        Order::create($order1);
        Order::create($order2);
        Order::create($order3);
        Order::create($order4);
    }
} 