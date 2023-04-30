import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

declare var toastr: any;

@Component({
  selector: 'app-admin-resetpassword',
  templateUrl: './admin-resetpassword.component.html',
  styleUrls: ['./admin-resetpassword.component.scss']
})
export class AdminResetpasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;

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
  resetAdmin(){
    toastr.success("Please Check your Email.", "Code has been Sent!");
  }
}
