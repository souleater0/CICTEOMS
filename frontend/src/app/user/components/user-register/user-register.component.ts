import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var toastr: any;

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
  private apiUrl = environment.apiUrl;

  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
  ){
    this.registerForm = this.formBuilder.group({
      first_Name: '',
      last_Name: '',
      middle_Name: '',
      Gender:  '',
      Birthdate: '',
      ftype: '',
      Email : '',
      Password: '',
    });
  }
  minDate = "1900-01-01";
  maxDate = "";

  ngOnInit(): void {
    const now = new Date();
    this.maxDate = now.toLocaleString();

    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toastr-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
  }
  get f() {return this.registerForm.controls};

  register(){
    this.submitted = true;

    const birthdate = this.registerForm.get('Birthdate')?.value;
    const formattedDate = new Date(birthdate).toISOString().substring(0, 10);
    const payload = {
      first_Name: this.registerForm.get('first_Name')?.value,
      last_Name: this.registerForm.get('last_Name')?.value,
      middle_Name: this.registerForm.get('middle_Name')?.value,
      Gender: this.registerForm.get('Gender')?.value,
      Birthdate: formattedDate,
      ftype: this.registerForm.get('ftype')?.value,
      Email: this.registerForm.get('Email')?.value,
      Password: this.registerForm.get('Password')?.value,
    };


    this.http.post(`${this.apiUrl}/user/register`, payload)
      .subscribe((response: any) => {
        if(response.success==true){
          console.log(response);
          toastr.success("Kindly wait for admin confirmation.", "Register Successful!");
        }
      }, error => {
        toastr.error(error.error.message);
        console.log(error);
      });
    
    // console.log(payload);
    // console.log(this.registerForm.value);
  }
}
