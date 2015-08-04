<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'clients';

    public function orders()
    {
        return $this->hasMany('App\Order');
    }
    public function orderedItems()
    {
        return $this->hasMany('App\OrderedItem');
    }

    public function location()
    {
        return $this->belongsTo('App\Location');
    }
}
