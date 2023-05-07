import { Component, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { HttpClient} from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AdminViewUserComponent } from '../../dialogs/admin-view-user/admin-view-user.component';
import * as moment from 'moment-timezone';

declare var toastr: any;

@Component({
  selector: 'app-admin-accountmanagement',
  templateUrl: './admin-accountmanagement.component.html',
  styleUrls: ['./admin-accountmanagement.component.scss']
})
export class AdminAccountmanagementComponent implements OnInit {

  displayedColumns: string[] = ['id', 'last_name','first_name','middle_name','facultyType', 'actions'];
  dataSource!: MatTableDataSource<any>;
  private apiUrl = environment.apiUrl;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private http : HttpClient,
    private dialog: MatDialog,
    ){
  
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.UpdateData();
      setInterval(() => {
        this.UpdateData();
      }, 3000); // refresh data every 5 seconds
    }, 2000);

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
    
  UpdateData() {
    this.http.get<any[]>(`${this.apiUrl}/users`).subscribe((data) => {
      if (data && data.length > 0) {
        // If data is defined and not empty, update the dataSource
        if (!this.dataSource || !this.isEqual(data, this.dataSource.data)) {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      } else {
        // Handle the case where the API response is empty or undefined
        console.log('API response is empty or undefined');
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }, error => {
      // Handle the case where the API request fails
      console.log('API request failed');
    });
  }
  isEqual(a: any[], b: any[]) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  clickView(row:any){
      const dialogRef = this.dialog.open(AdminViewUserComponent, {
        autoFocus: false,
        width: '40%',
        position: {
          top: '0',
          left: '30%',
          right: '30%',
          bottom: 'auto',
        },
        data: row,
    });
  }
  
  clickAccept(row: any){
    //Philippine Time
    const philippineTime = {
      email_verified_at: moment().tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss'),
    }
    // console.log(philippineTime.email_verified_at);

    this.http.put(`${this.apiUrl}/users/${row.id}`, philippineTime).subscribe(
      response =>{
        toastr.success("Accept Success!", "Information");
        console.log(response);
      },
      error => {
        console.error(error);
      }
    )
    // console.log(philippineTime);
    
  }

}
