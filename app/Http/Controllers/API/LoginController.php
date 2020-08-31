<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Helpers\InputHelper;
use App\Http\Helpers\ResponseHelper;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Register a new user
     * @param Request $request
     * @return JsonResponse
     */
    public function signUp(Request $request)
    {

        InputHelper::inputChecker(
            $request,
            [
                $request->username,
                $request->password
            ],
            function (Request $request) {
                (new User())->create($request);

                return ResponseHelper::jsonResponse(null, Response::HTTP_OK, config('messages.success'))->send();
            }
        );
    }

    /**
     * Login user and return a token
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        $token = $this->guard($request->username, $request->password);


        if ($token) {
            return ResponseHelper::jsonResponse(null, Response::HTTP_OK, config('messages.success'))->header('Authorization', $token)->send();
        } else {
            return ResponseHelper::jsonResponse(null, Response::HTTP_BAD_REQUEST, config('messages.fail'))->send();
        }
    }

    /**
     * Return auth guard
     * @param $username
     * @param $password
     * @return Auth
     */
    private function guard($username, $password)
    {
        return Auth::guard('user')->attempt(array('username' => $username, 'password' => $password));
    }
}
