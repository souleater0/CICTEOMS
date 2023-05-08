<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PartnersController;
use App\Http\Controllers\ExtensionsController;
use App\Http\Controllers\verificationController;
use Carbon\Carbon;

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
        'data'=> $request->user()->only(['id','first_name','middle_name','last_name','facultyType','gender','birth_date','email'])
    ]);
});

//User Route
    Route::post('user/register',[FacultyController::class,'register']);
    Route::post('user/login',[FacultyController::class,'login']);

    //Get Suggestion Partner
    Route::get('/user/suggestPartner',[FacultyController::class,'suggestPartner']);

    //Get Users
    Route::get('/users', function () {
        return App\Models\Faculty::whereNull('email_verified_at')->get();
    });

    //Get All Users
    Route::get('/userss', function () {
        return App\Models\Faculty::All();
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


Route::middleware('auth:admin')->group(function () {
    // Admin-specific routes here
    // ...
    Route::get('/admin', function (Request $request) {
        return response()->json([
            'data'=> $request->user()->only(['id','first_name','last_name','middle_name','email'])
        ]);
    });

    //Partner 
    
    // Get Active Partners
    Route::get('admin/partners', function () {
        return App\Models\Partner::where('isArchive', 0)
        ->where('endDate', '>=', Carbon::now())
        ->get();
    });
    //Get Inactive Partners
    Route::get('admin/partners-expired', function () {
        return App\Models\Partner::where('isArchive', 0)
        ->where('endDate', '<', Carbon::now())
        ->get();
    });

    // Admin Add Partner
    Route::post('admin/add-partners',[PartnersController::class,'addPartner']);

    //Admin view Partner
    Route::get('admin/view-partners/{id}',[PartnersController::class,'viewPartner']);

    //Admin archive Partner
    Route::put('admin/archive-partners/{id}',[PartnersController::class,'archivePartner']);

    //Admin Update Partner
    Route::post('admin/update-partners/{id}',[PartnersController::class,'updatePartner']);

//Extension
    //Get Extension
    Route::get('admin/extensions', function () {
        return App\Models\Extension::where('isArchive', 0)->get();
    });

    //View Extension
    Route::get('admin/view-extensions/{id}',[ExtensionsController::class,'viewExtension']);

    //Add Extension
    Route::post('admin/add-extensions',[ExtensionsController::class,'addExtension']);

    //Update Extension
    Route::put('admin/update-extensions/{id}',[ExtensionsController::class,'updateExtension']);
    
    //Archive Extension
    Route::put('admin/archive-extensions/{id}',[ExtensionsController::class,'archiveExtension']);
});


