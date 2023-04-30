<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\verificationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



// Route::get('/users/{id}', function ($id) {
//     $user = App\Models\Faculty::findOrFail($id);
//     return response()->json($user);
// });

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return response()->json([
        'data'=> $request->user()->only(['id','first_name','middle_name','last_name','email'])
    ]);
});

//User Route
Route::post('user/register',[FacultyController::class,'register']);
Route::post('user/login',[FacultyController::class,'login']);

//Get Users
Route::get('/users', function () {
    return App\Models\Faculty::whereNull('email_verified_at')->get();
});

//Verify Users
Route::put('/users/{id}', function ($id, Request $request) {
    $user = App\Models\Faculty::findOrFail($id);
    
    $user->email_verified_at = $request->input('email_verified_at');

    $user->save();
    return response()->json($user);
});

//User Process
Route::post('user/send-email-code',[verificationController::class,'sendVerificationCode']);

// //Admin Route
Route::post('admin/register',[AdminController::class,'register']);
Route::post('admin/login',[AdminController::class,'login']);

