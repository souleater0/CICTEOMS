import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-partnersmanagement',
  templateUrl: './admin-partnersmanagement.component.html',
  styleUrls: ['./admin-partnersmanagement.component.scss']
})
export class AdminPartnersmanagementComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'address',
    'dateofPartnership',
    'contactPerson',
    'contactNumber',
    'action',
  ];

  constructor(){

  }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //add
  openAddEditEmpForm(){

  }
  //edit
  openEditForm(data:any){

  }
  //delete
  deleteFaculty(data:any){

  }
}
