<?php

namespace App\Http\Controllers;

use App\Restaurant;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Location;
class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        // get all restaurants and locations
        $restaurants = Restaurant::with(array('location' => function($query)
        {
        }))->get();

        return $restaurants;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $restaurant = new Restaurant();

        $location = new Location();

        foreach ( $request->all() as $column => $value ) {
           
            switch ($column) {
                case "restaurant_name":
                    $restaurant->name = $value;
                    break;
                case "location_name":
                    $location->location_name = $value;
                    break;
                case "latitude":
                    $location->latitude= $value;
                    break;
                case "longitude":
                    $location->longitude = $value;
                    break;
                default:
                    break;
            }
            }
        $location->save();
        $restaurant->location_id =  $location->id;
        $restaurant->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //get single restaurants by id and lazy load its location
       $restaurant = Restaurant::find($id);

       $restaurant->load('location');
        return $restaurant;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request)
    {
        // update restaurant
        $restaurant = Restaurant::find($request->id);

        $location   = Location::find($request->location['id']);

        foreach ( $request->all() as $column => $value ) {
           
            
           
            switch ($column) {
                case "name":
                    $restaurant->name = $value;
                    break;
                case "location":
                    $location->location_name = $value['location_name'];
                    $location->longitude = $value['longitude'];
                    $location->latitude= $value['latitude'];
                    break;
                default:
                  
                    break;
            }
            }
        $location->save();
        $restaurant->location_id =  $location->id;
        $restaurant->save();

        return $location;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        // delete restaurant
        $restaurant = Restaurant::find($id);
        $restaurant->destroy();
    }
}
