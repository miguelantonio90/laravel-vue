<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Below mention routes are public, user can access those without any restriction.
// Create New User
Route::post('v1/sign-up', 'API\LoginController@signUp');
// Login User
Route::post('v1/login', 'API\LoginController@login');


Route::middleware('auth:user')->prefix('v1/')->group(function () {
    
});

Route::get('/login',function(){
    return ('Login Fail !!!');
})->name('login');
