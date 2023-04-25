import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as $ from 'jquery';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit{
  registerForm !: FormGroup;
  hide = true;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
  ){
    this.registerForm = this.formBuilder.group({
      first_Name: '',
      last_Name: '',
      middle_Name: '',
      Gender:  '',
      Birthdate: '',
      Email : '',
      Password: '',
    });
  }
  minDate = "1900-01-01";
  maxDate = "";

  ngOnInit(): void {
    const now = new Date();
    this.maxDate = now.toLocaleString();
  }
  get f() {return this.registerForm.controls};

  onSubmit(){
    console.log(this.registerForm);
  }
  register(){

  }
}
