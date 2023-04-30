import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.scss']
})
export class AdminViewUserComponent implements OnInit {
data:any;

constructor(
  private dialogRef: MatDialogRef<AdminViewUserComponent>,
  @Inject(MAT_DIALOG_DATA) data: any){
    this.data = data;
  }
  ngOnInit(): void {
    
  }
}
