<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});


Route::resource('restaurant', 'RestaurantController');
Route::resource('location', 'LocationController');
Route::resource('menu', 'MenuController');
Route::resource('menuitem', 'MenuItemController');
Route::resource('order', 'OrdersController');
Route::get('user/login/{username}/{password}', 'Auth\AuthController@login');
Route::get('user/logout/{userId}', 'Auth\AuthController@logout');
Route::resource('user', 'userController');