import { Component, OnInit } from '@angular/core';

// import * as $ from 'jquery';
Chart.register(...registerables);

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit{
  hide = true;
  constructor(){}
  minDate = "1900-01-01";
  maxDate = "";
  ngOnInit(): void {
    const now = new Date();
    this.maxDate = now.toLocaleString();
  }
}
