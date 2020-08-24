<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * @property integer $id
 * @property string $username
 * @property string $password
 * @property string $created_at
 * @property string $updated_at
 * @property Contact[] $contacts
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
    protected $fillable = ['name','email','username', 'password', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function contacts()
    {
        return $this->hasMany('App\Contact');
    }
    public function roles() {
        return $this
            ->belongsToMany('App\Role')
            ->withTimestamps();
    }

    public static function create(Request $request)
    {
        $user = new User();

        if (!empty($request->get('username'))) {
            $user->username = $request->get('username');
        }
        if (!empty($request->get('password'))) {
            $user->password = bcrypt($request->get('password'));
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
