<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * Class User
 * @package App
 * @method static findOrFail(int $id)
 * @method static latest()
 */
class User extends Authenticatable implements JWTSubject
{
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['firstName', 'lastName', 'username', 'email', 'password', 'nid', 'sexo', 'birthday', 'age', 'race', 'sons', 'salary', 'position', 'type'];

    /**
     * @return BelongsToMany
     */

    public function roles()
    {
        return $this
            ->belongsToMany('App\Role')
            ->withTimestamps();
    }

    public function create(Request $request)
    {
        $user = new User();

        foreach ($this->fillable as $key => $value) {
            switch ($value) {
                case 'username':
                    if (!empty($request->get($value))) {
                        $user->username = $request->get($value);
                    }
                    break;
                case 'password':
                    if (!empty($request->get($value))) {
                        $user->password = bcrypt($request->get($value));
                    }
                    break;

                default:
                    $user->$value = $request->get($value);
                    break;
            }
        }
        $user->save();

        return $user;
    }


    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->password;
    }
}
