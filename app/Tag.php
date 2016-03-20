<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        'name'
    ];
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function links()
    {
        return $this->belongsToMany('App\Link');
    }
}
