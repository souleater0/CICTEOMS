import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public loginForm!: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router : Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password: ['']
    });
  }
}
