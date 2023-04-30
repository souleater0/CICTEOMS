import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-epm',
  templateUrl: './admin-epm.component.html',
  styleUrls: ['./admin-epm.component.scss']
})
export class AdminEpmComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'id',
    'programTitle',
    'dateofPartnership',
    'place',
    'programDetails',
    'programLead',
    'members',
    'entity',
    'list-names',
    'programFlow',
    'addDetails',
    'partner',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
  ){

  }

  ngOnInit(): void {
    
  }

  openAddExtenForm(){

  }

  applyFilter(data:any){

  }
  deleteFaculty(data:any){

  }
}
