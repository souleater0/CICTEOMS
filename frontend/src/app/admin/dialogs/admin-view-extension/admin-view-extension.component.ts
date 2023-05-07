import { Component, OnInit, Inject} from '@angular/core';
import { AdminExtensionService } from '../../services/admin-extension.service';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'app-admin-view-extension',
  templateUrl: './admin-view-extension.component.html',
  styleUrls: ['./admin-view-extension.component.scss']
})
export class AdminViewExtensionComponent implements OnInit {
  data: any;
  listPartners!: any[];

  program_Title: string = '';
  start_Date: string = '';
  end_Date: string = '';
  place: string = '';
  program_Lead: string = '';
  program_Members: string = '';
  participants: string = '';
  program_Flow: string = '';
  program_Details: string = '';
  selectedPartner: string = '';

  constructor(
    private service: AdminExtensionService,
    private datePipe: DatePipe,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<AdminViewExtensionComponent>,
    @Inject(MAT_DIALOG_DATA) data: any)
  {
    this.data = data;
  }
  ngOnInit(): void {
    this.program_Title = this.data.data.programTitle;
    this.start_Date = this.data.data.startDate;
    this.end_Date = this.data.data.endDate;
    this.place = this.data.data.place;
    this.program_Lead = this.data.data.programLead;
    this.program_Members = this.data.data.programMembers;
    this.participants = this.data.data.participants;
    this.program_Flow = this.data.data.programFlow;
    this.program_Details = this.data.data.programDetails; 
    this.selectedPartner = this.data.data.partners; 
    
    //get partners
    this.service.getPartner().subscribe((data:any)=>{
      this.listPartners = data;
      console.log(data);
    });
    
  }
  getFile(date:any){}

  updateExtension(id:number):void {
    const startDate = this.datePipe.transform(this.start_Date, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(this.end_Date, 'yyyy-MM-dd');
    const data = {
      programTitle: this.program_Title,
      startDate: startDate,
      endDate: endDate,
      place: this.place,
      programLead: this.program_Lead,
      programMembers: this.program_Members,
      participants: this.participants,
      programFlow: this.program_Flow,
      programDetails: this.program_Details,
      partners: this.selectedPartner
    };
    this.service.updateExtension(id, data).subscribe(
      (response:any)=>{
        console.log(response);
       if(response.success==true){
        // console.log(data);
        this.toastr.success("Program has been updated!", "Update Success");
        this.dialogRef.close();
       }
    },error=>{
      console.log(error);
    }
    );
  }
}
