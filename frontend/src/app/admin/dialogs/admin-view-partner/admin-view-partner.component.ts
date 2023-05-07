import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

//Service
import { AdminViewPartnerServiceService } from '../../services/admin-view-partner-service.service';
import { error } from 'jquery';

declare var toastr: any;

@Component({
  selector: 'app-admin-view-partner',
  templateUrl: './admin-view-partner.component.html',
  styleUrls: ['./admin-view-partner.component.scss']
})
export class AdminViewPartnerComponent implements OnInit {
  data: any;

  partnersName: string = '';
  contactPerson: string = '';
  contactNo: string = '';
  address: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(
    private service: AdminViewPartnerServiceService,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<AdminViewPartnerComponent>,
    @Inject(MAT_DIALOG_DATA) data: any)
  {
    this.data = data;
  }
  ngOnInit(): void {
      //non-empty-string
      this.partnersName = this.data.data.partnersName;
      this.contactPerson = this.data.data.contactPerson
      this.contactNo = this.data.data.contactNo;
      this.address = this.data.data.address;
      this.startDate = this.data.data.startDate;
      this.endDate = this.data.data.endDate;
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

      // this.service.getPartner().subscribe((data:any)=>{
      //   console.log(data);
      // });
      
  }

  updatePartner(id:number):void {
    const startDate = this.datePipe.transform(this.startDate, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd');
    const data = {
      partnersName: this.partnersName,
      contactPerson: this.contactPerson,
      contactNo: this.contactNo,
      address: this.address,
      startDate: startDate,
      endDate: endDate
    };
    this.service.updatePartner(id, data).subscribe(
      (response:any)=>{
        console.log(response);
       if(response.success==true){
        // console.log(data);
        toastr.success("Partner has been updated!", "Update Success");
        this.dialogRef.close();
       }
    },error=>{
      console.log(error);
    }
    );
    console.log(this.partnersName)
  }
}
