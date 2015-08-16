<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderedItem extends Model
{
    protected $table = 'ordered_items';

    public function order()
    {
        return $this->belongsTo('App\Order');
    }

    public function client()
    {
        return $this->belongsTo('App\Client');
    }
}
