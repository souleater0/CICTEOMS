<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Extension extends Model
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
    public function partner(){
        return $this->belongsTo(Partner::class);
    }
    protected $fillable = [
        'programTitle',
        'startDate',
        'endDate',
        'place',
        'programLead',
        'programMembers',
        'participants',
        'programFlow',
        'programDetails',
        'partners',
        'certPath',
        'attendancePath',
        'invitationPath',
        'Others',
        'isArchive',
    ];
    protected $table = 'extensions';
}
