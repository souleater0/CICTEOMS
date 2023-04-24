<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faculty;
use Illuminate\Support\Facades\Mail;


class verificationController extends Controller
{
    public function sendVerificationCode(Request $request)
    {
        $faculty = Faculty::find(1);

        // Generate verification code
        $verificationCode = rand(100000, 999999);

        // Store verification code in database
        $faculty->code = $verificationCode;
        $faculty->save();

        // Send verification code via email
        // Mail::to($faculty->email)->send(new VerificationCodeMail($verificationCode));

        return response()->json([
            'message' => 'Verification code sent',
            'code' => $verificationCode,
        ], 200);
    }
}
