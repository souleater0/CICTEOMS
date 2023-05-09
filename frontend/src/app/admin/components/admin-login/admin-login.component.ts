import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare var toastr: any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm! : FormGroup;
  submitted : boolean = false;
  private apiUrl = environment.apiUrl;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private http : HttpClient,
    private router : Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
    });
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

  login(){
    this.http.post(`${this.apiUrl}/admin/login`, this.loginForm.value)
    .subscribe((response: any) => {
      // console.log(response);
      if(response.success==true){
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.access_token);
        this.router.navigate(['/admin/dashboard']);
        toastr.success("Login Succesful!", "Welcome! Admin");
      }
    }, error => {
      toastr.error(error.error.message);
      console.log(error);
    });
  }
}
