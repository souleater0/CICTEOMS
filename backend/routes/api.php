<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\AdminController;

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

// //User get
// //Admin Route
// Route::post('admin/register',[AdminController::class,'register']);
// Route::post('admin/login',[AdminController::class,'login']);

