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

use Illuminate\Support\Facades\Route;

// Below mention routes are public, user can access those without any restriction.
// Login User

Route::post('v1/login', 'API\LoginController@login');

Route::middleware('auth:user')->prefix('v1/')->group(function () {
});

Route::get('/login', function () {
    return ('Login Fail !!!');
})->name('login');

/**
 * User routes
 */
Route::get('v1/users', 'API\UserController@index');
Route::get('v1/users/{id}', 'API\UserController@show');
Route::post('v1/users', 'API\UserController@store');
Route::put('v1/users/{id}', 'API\UserController@update');
Route::delete('v1/users/{id}', 'API\UserController@destroy');
