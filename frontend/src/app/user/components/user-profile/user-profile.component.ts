import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserInfoService } from '../../service/user-info.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  firstName='';
  middleName='';
  lastName='';
  faculty_Type='';
  Email='';

  constructor(
    private service: UserInfoService
  ){}

  ngOnInit(): void {
    this.service.getUserInfo().subscribe((data)=>{
      this.firstName = data.data.first_name;
      this.lastName = data.data.last_name;
      this.middleName = data.data.middle_name;
      this.faculty_Type = data.data.facultyType;
      this.Email = data.data.email;
      console.log(data);
    })
  }
}
