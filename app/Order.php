<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    public function restaurants()
    {
        return $this->belongsTo('App\Restaurant');
    }

    public function orderedItems()
    {
        return $this->hasMany('App\OrderedItem');
    }

    public function client()
    {
        return $this->belongsTo('App\Client');
    }
}
