import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

//Service
import { AdminViewPartnerServiceService } from '../../services/admin-view-partner-service.service';
import { ToastrService } from '../../services/toastr.service';
import { error } from 'jquery';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';


declare var toastr: any;

@Component({
  selector: 'app-admin-view-partner',
  templateUrl: './admin-view-partner.component.html',
  styleUrls: ['./admin-view-partner.component.scss']
})
export class AdminViewPartnerComponent implements OnInit {
  data: any;
  submitted = false;
  moaFile:any;
  updatePartnerForm!: FormGroup;

  constructor(
    private service: AdminViewPartnerServiceService,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdminViewPartnerComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) data: any)
  {
    this.data = data;

    this.updatePartnerForm = this.fb.group({
      partnersName : ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      moaFile: [null],
    });
  }
  ngOnInit(): void {
      this.updatePartnerForm = this.fb.group({
        partnersName: [''],
        contactPerson: [''],
        contactNo: [''],
        address: [''],
        startDate: [''],
        endDate: [''],
        moaFile: [null]
      });

      this.updatePartnerForm.setValue({
        partnersName: this.data.data.partnersName,
        contactPerson: this.data.data.contactPerson,
        contactNo: this.data.data.contactNo,
        address: this.data.data.address,
        startDate: this.data.data.startDate,
        endDate: this.data.data.endDate,
        moaFile: ''
      });

      //non-empty-string
      // this.partnersName = this.data.data.partnersName;
      // this.contactPerson = this.data.data.contactPerson
      // this.contactNo = this.data.data.contactNo;
      // this.address = this.data.data.address;
      // this.startDate = this.data.data.startDate;
      // this.endDate = this.data.data.endDate;

      //Toast
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toastr-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      };
      
  }

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
  get f() {return this.updatePartnerForm.controls};

  updatePartner(id:number):void {
      this.submitted = true;
      if(this.updatePartnerForm.invalid){
        return;
      }
      const startDate = this.datePipe.transform(this.updatePartnerForm.get('startDate')?.value, 'yyyy-MM-dd');
      const endDate = this.datePipe.transform(this.updatePartnerForm.get('endDate')?.value, 'yyyy-MM-dd');

      const formData = new FormData();
      formData.append('partnersName', this.updatePartnerForm.get('partnersName')?.value);
      formData.append('contactPerson', this.updatePartnerForm.get('contactPerson')?.value);
      formData.append('contactNo', this.updatePartnerForm.get('contactNo')?.value);
      formData.append('address', this.updatePartnerForm.get('address')?.value);

      if(startDate){
        formData.append('startDate', startDate);
      }
      if(endDate){
        formData.append('endDate', endDate);
      }
      
      if(this.moaFile){
        formData.append('moaFile', this.moaFile, this.moaFile.name);
      }
      this.service.updatePartner(id, formData).subscribe(
        (response : any)=>{
          this.toastr.success(response.message);
          console.log(response);
          this.dialogRef.close();
        },error=>{
          this.toastr.warning(error.error.message);
          console.log(error.error.message);
        }
      )

  }
}
