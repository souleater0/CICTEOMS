<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;
use Illuminate\Support\Facades\Validator;
class AdminController extends Controller
{
    public function register(Request $request){

        $admin = Admin::where('email',$request['email'])->first();

        if($admin){
            $response['status'] = 0;
            $response['message'] = 'Admin Already Exist!';
            $response['code']=409;
        }
        else{
            $admin = Admin::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'middle_name' => $request->middle_name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            $response['status'] = 1;
            $response['message'] = 'Admin Registered Successfully';
            $response['code']=200;
        }

        return response()->json($response);
    }

    public function login(Request $request){
        //Account Validate
        $credentials = $request->only('email','password');

        // Check Email
        $admin = Admin::where('email',$request->email)->first();

        if(!$admin){
            return response()->json([
                'message' => 'Account is not yet Registered',
                'success' => false,
            ]);
        }

        //set custom claims
        $customClaims['token'] = JWTAuth::claims([
            'email' => $admin->email
        ])->fromUser($admin);

        //checkPassword
        $passwordChange = $admin->latest()->first();
        if($passwordChange){
            if(!Hash::check($request->password, $passwordChange->password)){
                return response()->json([
                    'message' => 'Invalid Credentials',
                    'success' => false,
                ],401);
            }
        }

        // Generate a JWT token with the custom claims
        $token = JWTAuth::claims($customClaims)->fromUser($admin);

        return response()->json([
            'data' => $customClaims,
            'message' => 'Admin Login Successful',
            'success' => true
        ],200);
    }
}
