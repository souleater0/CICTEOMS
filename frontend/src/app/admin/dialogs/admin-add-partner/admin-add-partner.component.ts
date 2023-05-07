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
    const allowedTypes = ['application/pdf', 'application/msword', 'image/png', 'image/jpeg'];
    const file = event.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        if(reader.result){
          const blob = new Blob([reader.result], { type: file.type });
          const fileWithMeta = { file: blob, fileName: file.name };
          this.partnerForm.patchValue({
            moaFile: fileWithMeta
          });
        }
      };
    } else {
      this.toastr.warning("Accepted: .docx, .png, jpg, .pdf","File Type Invalid");
      // Show an error message to the user
    }
  }

  addPartner(){
    const startDate = this.datePipe.transform(this.partnerForm.get('startDate')?.value, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(this.partnerForm.get('endDate')?.value, 'yyyy-MM-dd');

    const formData = new FormData();
    formData.append('partnersName', this.partnerForm.get('partnersName')?.value);
    formData.append('contactPerson', this.partnerForm.value.contactPerson);
    formData.append('contactNo', this.partnerForm.value.contactNo);
    formData.append('address', this.partnerForm.value.address);
    formData.append('startDate', startDate || '');
    formData.append('endDate', endDate || '');
    // formData.append('moaFile', this.partnerForm.get('moa')?.value.file);

    console.log(formData);
      // this.service.addPartner(formData).subscribe(
      //   (response : any)=>{
      //     this.toastr.success(response.message);
      //     console.log(response);
      //     this.dialogref.close();
      //   },error=>{
      //     this.toastr.warning(error.error.message);
      //     console.log(error.error.message);
      //   }
      // )
    }
}
