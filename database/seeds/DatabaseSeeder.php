<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

         $this->call(UserTableSeeder::class);
         $this->call(RestaurantTableSeeder::class);
         $this->call(LocationTableSeeder::class);
         $this->call(MenuItemTableSeeder::class);
         $this->call(MenuTableSeeder::class);

        Model::reguard();
    }
}
