<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use App\Models\Partner;

class PartnersController extends Controller
{
    //Add Partner
    public function addPartner(Request $request){
        
        $partner = Partner::where('partnersName',$request['partnersName'])->first();
        
        if($partner){
            $response['success'] = false;
            $response['message'] = 'Partners Already Exist!';
            return response()->json($response, 409);
        }
        else{
            $isArchive = 0;
            if($request->hasFile('moaFile')){
                //MoaFile Method
                $completeMoaFileName = $request->file('moaFile')->getClientOriginalName();
                $MoaFileNameOnly = pathinfo($completeMoaFileName, PATHINFO_FILENAME);
                $moaFileExtension = $request->file('moaFile')->getClientOriginalExtension();
                $moaUpload = str_replace(' ', '_', $MoaFileNameOnly).'-'.time().'.'.$moaFileExtension;
                $path = $request->file('moaFile')->storeAs('public/files', $moaUpload);

                // dd($moaUpload);
                $partner = Partner::create([
                    'partnersName' => $request->input('partnersName'),
                    'contactPerson' => $request->input('contactPerson'),
                    'contactNo' => $request->input('contactNo'),
                    'address' => $request->input('address'),
                    'startDate' => $request->input('startDate'),
                    'endDate' => $request->input('endDate'),
                    'isArchive' => $isArchive,
                    'moaPath' => $path
                ]);
                $response['success'] = true;
                $response['file'] = 'File Uploaded';
                $response['message'] = 'Partners Created Successfully';
                return response()->json($response, 200);
                // $partner->moaPath = $moaUpload; //save file in database
                
            }
            else{
                $response['success'] = false;
                $response['message'] = 'Something Went Wrong';
                return response()->json($response, 409);
            }
        }
        
    }
    public function viewPartner($id){
        
        try{
            $partner = Partner::findOrFail($id);

            $response['data'] = $partner;
            $response['success'] = true;
            $response['message'] = 'Partners found!';
        return response()->json($response);

        } catch (Exception $e){
            $response['success'] = false;
            $response['message'] = 'Partners not found';
        return response()->json($response);
        }
    }

    public function archivePartner(Request $request, $id){
        
        try{
            $partner = Partner::findOrFail($id);
            $partner->isArchive = $request->input('isArchive');
            $partner->save();
            $response['success'] = true;
            $response['message'] = 'Partner has been archived!';
        return response()->json($response);

        } catch (Exception $e){
            $response['success'] = false;
            $response['message'] = 'Partners not found';
        return response()->json($response);
        }
    }

    public function updatePartner(Request $request, $id){
        try{
            $partner = Partner::findOrFail($id);
            if($request->hasFile('moaFile')){
                //MoaFile Method
                $completeMoaFileName = $request->file('moaFile')->getClientOriginalName();
                $MoaFileNameOnly = pathinfo($completeMoaFileName, PATHINFO_FILENAME);
                $moaFileExtension = $request->file('moaFile')->getClientOriginalExtension();
                $moaUpload = str_replace(' ', '_', $MoaFileNameOnly).'-'.time().'.'.$moaFileExtension;
                $path = $request->file('moaFile')->storeAs('public/files', $moaUpload);
                
                // Update MOA and other fields
                $partner->partnersName = $request->input('partnersName');
                $partner->contactPerson = $request->input('contactPerson');
                $partner->contactNo = $request->input('contactNo');
                $partner->address = $request->input('address');
                $partner->startDate = $request->input('startDate');
                $partner->endDate = $request->input('endDate');
                $partner->moaPath = $path;
                $partner->save();
    
                $response['success'] = true;
                $response['message'] = 'Partner has been updated!';
                return response()->json($response,200);
            }            
            else{
                // Update non-MOA fields
                $partner->partnersName = $request->input('partnersName');
                $partner->contactPerson = $request->input('contactPerson');
                $partner->contactNo = $request->input('contactNo');
                $partner->address = $request->input('address');
                $partner->startDate = $request->input('startDate');
                $partner->endDate = $request->input('endDate');
                $partner->save();
    
                $response['success'] = true;
                $response['message'] = 'Partner has been updated!';
                return response()->json($response,200);
            }        
        } catch (Exception $e){
            $response['success'] = false;
            $response['message'] = 'Partners not found';
            return response()->json($response);
        }
    }

}
