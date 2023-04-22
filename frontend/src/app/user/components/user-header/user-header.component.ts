import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  firstName ='';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token') !== null;
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    this.http.get('http://localhost:8000/api/user',options)
    .subscribe((response: any) => {
      this.firstName = response.data.first_name;
      console.log(response.data.first_name);
    });
  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
