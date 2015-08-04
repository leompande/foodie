<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    protected $table = 'menu_items';

    public function menu()
    {
        return $this->belongsTo('App\Menu');
    }

    public function restaurant()
    {
        return $this->belongsTo('App\Restaurant');
    }
}
