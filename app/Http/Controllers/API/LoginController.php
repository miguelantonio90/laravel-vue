<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Helpers\ResponseHelper;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    /**
     * Login user and return a token
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
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
     *
     * @param string $username
     * @param string $password
     * @return string
     */
    private function guard(string $username, string $password): string
    {
        return Auth::guard('user')->attempt(array('username' => $username, 'password' => $password));
    }
}
