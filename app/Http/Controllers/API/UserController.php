<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Helpers\InputHelper;
use App\Http\Helpers\ResponseHelper;
use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Collection
     */
    public function index(): Collection
    {
        return User::latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        InputHelper::inputChecker(
            $request,
            [
                $request->firstName,
                $request->lastName,
                $request->username,
                $request->password,
                $request->email,
                $request->type
            ],
            function (Request $request) {
                (new User())->create($request);

                return ResponseHelper::jsonResponse(null, Response::HTTP_OK, config('messages.success'))->send();
            }
        );
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Collection
     */
    public function show(int $id): Collection
    {
        return User::latest()->get($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     * @throws ValidationException
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $this->validate($request, [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'type' => 'required',
        ]);

        $user = User::findOrFail($id);

        $user->update($request->all());
        return ResponseHelper::jsonResponse(null, Response::HTTP_OK, config('messages.success'))->send();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $user = User::findOrFail($id);
        $user->delete();
        return ResponseHelper::jsonResponse(null, Response::HTTP_OK, config('messages.success'))->send();
    }
}
