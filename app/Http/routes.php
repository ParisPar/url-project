<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::get('/', function () {
        return view('welcome');
    })->middleware(['guest']);//Redirects logged in users to /home
});

Route::group(['middleware' => 'web'], function () {
    Route::auth();//Sets up the routes for authenticating a user

    Route::get('/home', 'HomeController@index');

    Route::get('links/export', function() {
        // return view('pdf.links');
        $pdf = PDF::loadView('pdf.links');
        return $pdf->download('Url Project - My Links.pdf');
    });

    Route::resource('links', 'LinksController');
    Route::resource('tags', 'TagsController');



    Route::get('{path?}', 'HomeController@index')->where('path', '.*');
});
