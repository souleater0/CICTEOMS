import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AdminViewPartnerServiceService } from '../../services/admin-view-partner-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminViewPartnerComponent } from '../../dialogs/admin-view-partner/admin-view-partner.component';
import { AdminAddPartnerComponent } from '../../dialogs/admin-add-partner/admin-add-partner.component';

declare var toastr: any;

@Component({
  selector: 'app-admin-partnersmanagement',
  templateUrl: './admin-partnersmanagement.component.html',
  styleUrls: ['./admin-partnersmanagement.component.scss']
})
export class AdminPartnersmanagementComponent implements OnInit {
  activeSource!: MatTableDataSource<any>;
  inactiveSource!: MatTableDataSource<any>;
  private apiUrl = environment.apiUrl;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'partnersName',
    'contactPerson',
    'contactNumber',
    'address',
    'startofPartnership',
    'endofPartnership',
    'action',
  ];

  constructor(
    private http : HttpClient,
    private service: AdminViewPartnerServiceService,
    private dialog: MatDialog,
  ){

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updateActive();
      setInterval(() => {
        this.updateActive();
      }, 6000); // refresh data every 6 seconds
    }, 2000);

    setTimeout(() => {
      this.updateInactive();
      setInterval(() => {
        this.updateInactive();
      }, 6000); // refresh data every 6 seconds
    }, 2000);

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

  FilterActive(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.activeSource.filter = filterValue.trim().toLowerCase();

    if (this.activeSource.paginator) {
      this.activeSource.paginator.firstPage();
    }
  }
  FilterInactive(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.inactiveSource.filter = filterValue.trim().toLowerCase();

    if (this.inactiveSource.paginator) {
      this.inactiveSource.paginator.firstPage();
    }
  }
  //getting active partners
  updateActive(){
    this.http.get<any[]>(`${this.apiUrl}/admin/partners`).subscribe((data) => {
      if (data && data.length > 0) {
        // If data is defined and not empty, update the dataSource
        if (!this.activeSource || !this.isEqual(data, this.activeSource.data)) {
          this.activeSource = new MatTableDataSource(data);
          this.activeSource.paginator = this.paginator;
          this.activeSource.sort = this.sort;
        }
      } else {
        // Handle the case where the API response is empty or undefined
        console.log('API response is empty or undefined');
        this.activeSource = new MatTableDataSource(data);
        this.activeSource.paginator = this.paginator;
        this.activeSource.sort = this.sort;
      }
    }, error => {
      // Handle the case where the API request fails
      console.log('API request failed');
    });
  }
  isEqual(a: any[], b: any[]) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  //getting inactive partners
  updateInactive(){
    this.http.get<any[]>(`${this.apiUrl}/admin/partners-expired`).subscribe((data) => {
      if (data && data.length > 0) {
        // If data is defined and not empty, update the dataSource
        if (!this.inactiveSource || !this.isEqual2(data, this.inactiveSource.data)) {
          this.inactiveSource = new MatTableDataSource(data);
          this.inactiveSource.paginator = this.paginator;
          this.inactiveSource.sort = this.sort;
        }
      } else {
        // Handle the case where the API response is empty or undefined
        console.log('API response is empty or undefined');
        this.inactiveSource = new MatTableDataSource(data);
        this.inactiveSource.paginator = this.paginator;
        this.inactiveSource.sort = this.sort;
      }
    }, error => {
      // Handle the case where the API request fails
      console.log('API request failed');
    });
  }
  isEqual2(a: any[], b: any[]) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  //view
  viewPartner(id:number):void {
    this.service.viewParter(id).subscribe(response=>{
      const dialogRef = this.dialog.open(AdminViewPartnerComponent,{
        width: '40%',
        position: {
          top: '0',
          left: '30%',
          right: '30%',
          bottom: 'auto',
        },
        data:response,
      });
    });
  }
  //delete
  archivePartner(id:number):void {
    this.service.archivePartner(id).subscribe(
      response => {
        console.log(response);
        toastr.success("Partner has been Archive!", "Success");
        // console.log('Data has been archived');
      },
      error => console.log(error)
    );
  }
  addPartner(){
    const dialogRef = this.dialog.open(AdminAddPartnerComponent,{
      width: '40%',
      position: {
        top: '0',
        left: '30%',
        right: '30%',
        bottom: 'auto',
        
      }
    });
  }
}
