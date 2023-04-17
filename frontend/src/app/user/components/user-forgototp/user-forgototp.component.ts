import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';


declare var toastr: any;
@Component({
  selector: 'app-user-forgototp',
  templateUrl: './user-forgototp.component.html',
  styleUrls: ['./user-forgototp.component.scss']
})

export class UserForgototpComponent implements OnInit{

  constructor(
    private router: RouterModule
  ){}
  ngOnInit(): void {
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
  sendotp(){
    // console.log("test");
    toastr.success("Check your Email Verification Code.", "Email Sent!");
  }
}
