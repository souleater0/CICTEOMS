import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

declare var toastr: any;
@Component({
  selector: 'app-user-forgototp',
  templateUrl: './user-forgototp.component.html',
  styleUrls: ['./user-forgototp.component.scss']
})

export class UserForgototpComponent implements OnInit{
  otpForm! : FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: RouterModule,
  ){}
  ngOnInit(): void {
    this.otpForm = this.fb.group(
      {
        code : ['',[
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ],
      ],

    });
    // Validators.required,
    // Validators.minLength(6),
    // Validators.maxLength(6),
    // Validators.pattern('^[0-9]*$'),
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

  get f() {return this.otpForm.controls};

  sendOtp(){
    // console.log("test");
    this.submitted = true;
    if (this.otpForm.invalid) {
      return;
    }
    if(this.otpForm.valid){
      toastr.success("Check your Email Verification Code.", "Email Sent!");
    }

  }
}
