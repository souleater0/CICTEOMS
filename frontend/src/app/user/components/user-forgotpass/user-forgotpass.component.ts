import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-forgotpass',
  templateUrl: './user-forgotpass.component.html',
  styleUrls: ['./user-forgotpass.component.scss']
})
export class UserForgotpassComponent {
  hide = true;
  newpassForm! : FormGroup;
  submitted = false;

  get f() {return this.newpassForm.controls};

  resetPassword(){

  }
}
