<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Extension;

class ExtensionsController extends Controller
{
    //viewExtension
    public function viewExtension($id){
        try{
            $extension = Extension::findOrFail($id);

            $response['data'] = $extension;
            $response['success'] = true;
            $response['message'] = 'Program found!';
        return response()->json($response);

        } catch (Exception $e){
            $response['success'] = false;
            $response['message'] = 'Program not found';
        return response()->json($response);
        }
    }

    //addExtension
    public function addExtension(Request $request){
        $extension = Extension::where('programTitle',$request['program_Title'])->first();

        if($extension){
            $response['success'] = false;
            $response['message'] = 'Program Already Exist!';
            $response['code'] = 409;
            return response()->json($response,409);
        }
        else{
            $isArchive = 0;
            $certPath = "none";
            $attendPath = "none";
            $invPath = "none";
            $OthersPath = "none";
            $extension = Extension::create([
                'programTitle' => $request->input('program_Title'),
                'startDate' => $request->input('start_Date'),
                'endDate' => $request->input('end_Date'),
                'place' => $request->input('place'),
                'programLead' => $request->input('program_Lead'),
                'programMembers' => $request->input('program_Members'),
                'participants'=> $request->input('participants'),
                'programFlow' => $request->input('program_Flow'),
                'programDetails'=> $request->input('program_Details'),
                'partners' => $request->input('partners'),
                'certPath' => $certPath,
                'attendancePath' => $attendPath,
                'invitationPath' => $invPath,
                'Others' => $OthersPath,
                'isArchive' => $isArchive,
            ]);
            $response['success'] = true;
            $response['message'] = 'Program Created Successfully';
            $response['code'] = 200;
            return response()->json($response);
        }
    }

    //updateExtension
    public function updateExtension(Request $request, $id){
        try{
            $extension = Extension::findOrFail($id);

            $extension->programTitle = $request->input('programTitle');
            $extension->startDate = $request->input('startDate');
            $extension->endDate = $request->input('endDate');
            $extension->place = $request->input('place');
            $extension->programLead = $request->input('programLead');
            $extension->programMembers = $request->input('programMembers');
            $extension->participants = $request->input('participants');
            $extension->programFlow = $request->input('programFlow');
            $extension->programDetails = $request->input('programDetails');
            $extension->partners = $request->input('partners');

            $extension->save();
            $response['success'] = true;
            $response['message'] = 'Partner has been updated!';
        return response()->json($response);

        } catch (Exception $e){
            $response['success'] = false;
            $response['message'] = 'Partners not found';
        return response()->json($response);
        }
    }

    //archiveExtension
    public function archiveExtension(Request $request, $id){
        try{
            $extension = Extension::findOrFail($id);
            $extension->isArchive = $request->input('isArchive');
            $extension->save();
            $response['success'] = true;
            $response['message'] = 'Partner has been archived!';
        return response()->json($response);

        } catch (Exception $e){
            $response['success'] = false;
            $response['message'] = 'Partners not found';
        return response()->json($response);
        }
    }


}
