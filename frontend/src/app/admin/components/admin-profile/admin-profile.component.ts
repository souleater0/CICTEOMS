import { Component, OnInit } from '@angular/core';
import { AdminInfoService } from '../../services/admin-info.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  firstName = '';
  lastName = '';
  middleName = '';
  email = '';


  constructor(
    private service: AdminInfoService
  ){}
  ngOnInit(): void {
    this.service.getAdminInfo().subscribe((data)=>{
      this.firstName = data.data.first_name;
      this.lastName = data.data.last_name;
      this.middleName = data.data.middle_name;
      this.email = data.data.email;
    })
  }
}
