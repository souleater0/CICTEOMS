import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminAddExtensionComponent } from '../../dialogs/admin-add-extension/admin-add-extension.component';
import { AdminExtensionService } from '../../services/admin-extension.service';
import { AdminViewExtensionComponent } from '../../dialogs/admin-view-extension/admin-view-extension.component';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'app-admin-epm',
  templateUrl: './admin-epm.component.html',
  styleUrls: ['./admin-epm.component.scss']
})
export class AdminEpmComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  private apiUrl = environment.apiUrl;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'programTitle',
    'startDate',
    'endDate',
    'place',
    'programLead',
    'programFlow',
    'partner',
    'action',
  ];

  constructor(
    private dialog: MatDialog,
    private http : HttpClient,
    private toastr: ToastrService,
    private service: AdminExtensionService,
  ){

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updateExtensionData();
      setInterval(() => {
        this.updateExtensionData();
      }, 6000); // refresh data every 6 seconds
    }, 2000);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  updateExtensionData(){
    this.http.get<any[]>(`${this.apiUrl}/admin/extensions`).subscribe((data) => {
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
  AddExtensionForm(){
    const dialogRef = this.dialog.open(AdminAddExtensionComponent,{
      width: '40%',
      position: {
        top: '0',
        left: '30%',
        right: '30%',
        bottom: 'auto',
      }
    });
  }

  viewExtension(id:number){
    this.service.viewExtension(id).subscribe(response=>{
      const dialogRef = this.dialog.open(AdminViewExtensionComponent,{
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

  archiveExtension(id:number){
    this.service.archiveExtension(id).subscribe(
      response => {
        console.log(response);
        this.toastr.success("Partner has been Archive!", "Success");
        // console.log('Data has been archived');
      },
      error => console.log(error)
    );
  }
}
