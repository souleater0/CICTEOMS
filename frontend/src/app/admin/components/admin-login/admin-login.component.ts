import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm! : FormGroup;
  submitted : boolean = false;
  hide = true;

  constructor(
    private fb: FormBuilder
  ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email : ['', Validators.required],
      Password : ['', Validators.required],
    });
  }

  login(){

  }
}
