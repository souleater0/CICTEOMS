import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login.service';

declare var toastr: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  loginForm! : FormGroup;
  submitted : boolean = false;

  // loginForm = this.fb.group({
  //   Email : [''],
  //   Password : ['']
  // });
  hide = true;

  constructor(
    private fb: FormBuilder,
    private http : HttpClient,
    private router : Router
    // private activateRoute : ActivatedRoute
  ){
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email : ['', Validators.required],
      Password : ['', Validators.required],
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
    this.router.navigate(['/user/home']);
    toastr.success("Login Succesful!", "Information");
  }
}
