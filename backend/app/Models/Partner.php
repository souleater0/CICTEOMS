<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Partner extends Model
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
    public function extensionProgram(){
        return $this->hasMany(Extension::class);
    }

    protected $fillable = [
        'partnersName',
        'contactPerson',
        'contactNo',
        'address',
        'startDate',
        'endDate',
        'isArchive',
        'isExpired',
        'moaPath',
    ];
    protected $table = 'partners';
}
