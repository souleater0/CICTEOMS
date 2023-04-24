import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { LoginService } from '../../service/login.service';
// import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

declare var toastr: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  loginForm! : FormGroup;
  private apiUrl = environment.apiUrl;
  hide = true;
  submitted = false;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(
    private fb: FormBuilder,
    private http : HttpClient,
    private router : Router
    // private activateRoute : ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]], //emailValidator]
      password : ['',
      [ Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.passwordPattern),
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$'),
      ]
      ], //passwordValidator
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

  get f() {return this.loginForm.controls};

  login(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    if(this.loginForm.valid){
      this.http.post(`${this.apiUrl}/user/login`, this.loginForm.value)
      .subscribe((response: any) => {
        // console.log(response);
        if(response.success==true){
          localStorage.setItem('access_token', response.data.access_token);
          this.router.navigate(['/user/home']);
          toastr.success("Login Succesful!", "Information");
        }
      }, error => {
        toastr.error(error.error.message);
        console.log(error);
      });
    }
  }



  // get invalid(): boolean {
  //   return this.loginForm.invalid;
  // }

  // get dirty(): boolean {
  //   return this.loginForm.dirty;
  // }

  // get touched(): boolean {
  //   return this.loginForm.touched;
  // }
  // hasError(controlName: string, errorName: string) {
  //   return this.loginForm.controls[controlName].hasError(errorName);
  // }
}
