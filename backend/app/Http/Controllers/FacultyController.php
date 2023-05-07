<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Faculty;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;


class FacultyController extends Controller
{
    public function register(Request $request){

        $faculty = Faculty::where('email',$request['Email'])->first();

        if($faculty){
            $response['status'] = 0;
            $response['message'] = 'Faculty User Already Exist!';
            $response['code']=409;
            return response()->json($response,409);
        }
        else{
            $randomid = rand(1000, 9999);
            $faculty_id = 'f'.time().''.$randomid;
            //format date
            $faculty = Faculty::create([
                'faculty_id' => $faculty_id,
                'first_name' => $request->input('first_Name'),
                'last_name' => $request->input('last_Name'),
                'middle_name' => $request->input('middle_Name'),
                'gender' => $request->input('Gender'),
                'birth_date' => $request->input('Birthdate'),
                'email' => $request->input('Email'),
                'password' => Hash::make($request->input('Password')),
                'facultyType' => $request->input('ftype'),
            ]);
            $response['status'] = 1;
            $response['success'] = true;
            $response['message'] = 'Faculty User Registered Successfully';
            $response['code']=200;
            return response()->json($response);
        }
        
    }

    public function login(Request $request){

        //Account Validate
        $credentials = $request->only('email','password');

        $validate = Validator::make($credentials,[
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validate->fails()){
            return response()->json([
                'message' => 'Email and Password Required!',
                'success' => false,
                'errors' => $validate->errors(),
            ], 401);
        }

        // Check Email
        $faculty = Faculty::where('email',$request->email)->first();

        if(!$faculty){
            return response()->json([
                'message' => 'Account is not yet Registered',
                'success' => false,
            ],401);
        }

        //Check Email Validity
        $emailValid = Faculty::where('email',$request->email)
        ->whereNotNull('email_verified_at')
        ->first();

        if(!$emailValid){
            return response()->json([
                'message' => 'Account is not yet Validated',
                'success' => false,
            ],401);
        }

        // $faculty = Faculty::where('email',$request->email)->first();

        //set custom claims
        $customClaims['access_token'] = JWTAuth::claims([
            'faculty_id'=> $faculty->faculty_id,
            'email' => $faculty->email,
            'role' => 'user',
        ])->fromUser($faculty);

        //checkPassword
        $passwordChange = $faculty->latest()->first();
        if($passwordChange){
            if(!Hash::check($request->password, $passwordChange->password)){
                return response()->json([
                    'message' => 'Invalid Credentials',
                    'success' => false
                ],401);
            }
        }

        // Generate a JWT token with the custom claims
        $token = JWTAuth::claims($customClaims)->fromUser($faculty);

        return response()->json([
            'data' => $customClaims,
            'message' => 'User Login Successful',
            'success' => true
        ],200);
    }
    public function suggestPartner(Request $request){
        $query = $request->input('q');
        $partners = Faculty::where('first_name', 'like', '%' . $query . '%')->get();
        // $suggestions = $partners->pluck('first_name');

        $suggestions = $partners->map(function ($partners) {
            return $partners->last_name .' '.$partners->first_name;
        })->toArray();
        
        return response()->json($suggestions);
    }
}
