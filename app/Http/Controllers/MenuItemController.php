<?php

namespace App\Http\Controllers;

use App\MenuItem;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return MenuItem::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $menuItem = new MenuItem();
        foreach ( $request->all() as $column => $value ) {

            switch ($column) {
                case "item_name":
                    $menuItem->item_name = $value;
                    break;
                case "menu_id":
                    $menuItem->menu_id = $value;
                    break;
                case "price":
                    $menuItem->price = $value;
                    break;
                case "restaurant_id":
                    $menuItem->restaurant_id = $value;
                    break;
            }
        }
        $menuItem->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return MenuItem::find($id);
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
        $menuItem = MenuItem::find($request->id);


        foreach ( $request->all() as $column => $value ) {


            switch ($column) {
                case "item_name":
                    $menuItem->item_name = $value;
                    break;
                case "menu_id":
                    $menuItem->menu_id = $value;
                    break;
                case "price":
                    $menuItem->price = $value;
                    break;
                case "restaurant_id":
                    $menuItem->restaurant_id = $value;
                    break;
            }
        }
        $menuItem->save();

        return $menuItem;
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
        $menuItem = MenuItem::find($id);
        $menuItem->destroy($id);
    }
}
