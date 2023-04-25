import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-identify',
  templateUrl: './user-identify.component.html',
  styleUrls: ['./user-identify.component.scss']
})
export class UserIdentifyComponent {
  emailForm! : FormGroup;
  submitted = false;

  get f() {return this.emailForm.controls};

  sendEmail(){

  }
}
