<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;


class Faculty extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    // Rest omitted for brevity

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

    protected $fillable = [
        'faculty_id',
        'first_name',
        'last_name',
        'middle_name',
        'gender',
        'birth_date',
        'email',
        'password',
        'facultyType',
    ];
    protected $table = 'faculties';

    // public function extensions()
    // {
    //     return $this->belongsToMany(Extension::class, 'faculty_extension', 'faculty_id', 'extension_id');
    // }
}
