<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $table = 'restaurants';

    public function location()
    {
        return $this->belongsTo('App\Location');
    }

    public function menu()
    {
        return $this->belongsTo('App\Menu');
    }

    public function menuItems()
    {
        return $this->hasMany('App\MenuItem');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
