//AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminResetpasswordComponent } from './components/admin-resetpassword/admin-resetpassword.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidenavComponent } from './components/admin-sidenav/admin-sidenav.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { AdminEpmComponent } from './components/admin-epm/admin-epm.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminPartnersmanagementComponent } from './components/admin-partnersmanagement/admin-partnersmanagement.component';
import { AdminReportgenerationComponent } from './components/admin-reportgeneration/admin-reportgeneration.component';
import { AdminAccountmanagementComponent } from './components/admin-accountmanagement/admin-accountmanagement.component';

//admin Auth Guard
import { AuthGuard, AdminGuard } from '../guards/auth.guard';

const routes:Routes = [
  {
    path: 'admin',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: AdminLoginComponent,
      },
    ]
  },
  {
    path: 'admin',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'account-management',
        component: AdminAccountmanagementComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'extension-program-management',
        component: AdminEpmComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'partners-management',
        component: AdminPartnersmanagementComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'report-generation',
        component: AdminReportgenerationComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
    ]
  }
  // {
  //   path: '**', redirectTo: ''
  // }
];

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminResetpasswordComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminProfileComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    AdminEpmComponent,
    AdminDashboardComponent,
    AdminPartnersmanagementComponent,
    AdminReportgenerationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],

})
export class AdminModule {
  constructor(
    private router: Router
  ){

  }
}
