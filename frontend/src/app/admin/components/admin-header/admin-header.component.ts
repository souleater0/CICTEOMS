import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdminInfoService } from '../../services/admin-info.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit{
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  firstName='';
  
  constructor(
    private http: HttpClient,
    private service: AdminInfoService,
  ) {}

  ngOnInit(): void {
    this.service.getAdminInfo().subscribe((data)=>{
      this.firstName = data.data.first_name;
    })
  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout(){
    localStorage.removeItem('access_token');
  }
}
