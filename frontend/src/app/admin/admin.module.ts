import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminResetpasswordComponent } from './components/admin-resetpassword/admin-resetpassword.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: 'admin/login', component: AdminLoginComponent
  },
  {
    path: 'admin/reset', component: AdminResetpasswordComponent
  }
];
@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminResetpasswordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class AdminModule { }
