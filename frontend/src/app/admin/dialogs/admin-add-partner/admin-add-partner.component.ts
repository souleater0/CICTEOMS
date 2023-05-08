import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminViewPartnerServiceService } from '../../services/admin-view-partner-service.service';
import { DatePipe } from '@angular/common';
import { error } from 'jquery';
import { ToastrService } from '../../services/toastr.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-add-partner',
  templateUrl: './admin-add-partner.component.html',
  styleUrls: ['./admin-add-partner.component.scss']
})
export class AdminAddPartnerComponent implements OnInit {
partnerForm !: FormGroup;
moaFile: any;
submitted = false;

constructor(
  private fb: FormBuilder,
  private datePipe: DatePipe,
  private toastr : ToastrService,
  private service: AdminViewPartnerServiceService,
  private dialogref: MatDialogRef<AdminAddPartnerComponent>
  ){
    this.partnerForm = this.fb.group({
      partnersName : ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      moaFile: [null, Validators.required],
    });
  }

ngOnInit(): void {
}
  get f() {return this.partnerForm.controls};

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const allowedTypes = ['application/pdf', 'application/msword', 'image/png', 'image/jpeg'];
    if (file && allowedTypes.includes(file.type)) {
      // The file is valid
      this.moaFile = file;
      this.toastr.success("Uploaded File is Accepted","Upload Success");
      console.log(this.moaFile);
    } else {
      // The file is invalid
      event.target.value = ''; //reset uploaded file
      this.toastr.warning("Accepted: .docx, .png, jpg, .pdf","File Type Invalid");
    }
  }

  addPartner(){
      this.submitted = true;
      if(this.partnerForm.invalid){
        return;
      }
      const startDate = this.datePipe.transform(this.partnerForm.get('startDate')?.value, 'yyyy-MM-dd');
      const endDate = this.datePipe.transform(this.partnerForm.get('endDate')?.value, 'yyyy-MM-dd');
  
      const formData = new FormData();
      formData.append('partnersName', this.partnerForm.get('partnersName')?.value);
      formData.append('contactPerson', this.partnerForm.get('contactPerson')?.value);
      formData.append('contactNo', this.partnerForm.get('contactNo')?.value);
      formData.append('address', this.partnerForm.get('address')?.value);

      if(startDate){
        formData.append('startDate', startDate);
      }
      if(endDate){
        formData.append('endDate', endDate);
      }
      formData.append('moaFile', this.moaFile, this.moaFile.name);

        this.service.addPartner(formData).subscribe(
          (response : any)=>{
            this.toastr.success(response.message);
            console.log(response);
            this.dialogref.close();
          },error=>{
            this.toastr.warning(error.error.message);
            console.log(error.error.message);
          }
        )
    }
}
