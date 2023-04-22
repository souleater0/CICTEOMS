import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import Module
import  {UserModule} from './user/user.module'; //Import User Module
import {AdminModule} from './admin/admin.module'; //Import Admin Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    NgbModule,
  ],
  providers:[

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
