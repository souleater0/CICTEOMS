//AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserForgotpassComponent } from './components/user-forgotpass/user-forgotpass.component';
import { UserForgototpComponent } from './components/user-forgototp/user-forgototp.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserSidenavComponent } from './components/user-sidenav/user-sidenav.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { ProfileLayoutComponent } from './layouts/profile-layout.component';
import { UserViewAssignedProgramComponent } from './components/user-view-assigned-program/user-view-assigned-program.component';
import { UserReportGenerationComponent } from './components/user-report-generation/user-report-generation.component';

//Guards
import { AuthGuard, UserGuard, NoAuthGuard} from '../guards/auth.guard';
import {InterceptorService} from './service/interceptor.service';
import { UserIdentifyComponent } from './components/user-identify/user-identify.component';

//Key Events

//DateFormat
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

//Date Format
const MY_DATE_FORMAT = {
  parse: {
    //'YYYY/MM/DD'
    dateInput: 'YYYY/MM/DD', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'YYYY/MM/DD', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

const routes:Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user/login',
      },
      {
        path: 'user/login',
        component: UserLoginComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'user/register',
        component: UserRegisterComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'user/forgot-otp',
        component: UserForgototpComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'user/user-identify',
        component: UserIdentifyComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'user/new-password',
        component: UserForgotpassComponent,
        canActivate: [NoAuthGuard],
      },
    ]
  },
  {
    path: 'user',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view-assigned-program',
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard, UserGuard],
      },
      {
        path: 'view-assigned-program',
        component: UserViewAssignedProgramComponent,
        canActivate: [AuthGuard, UserGuard],
      },
      {
        path: 'report-generation',
        component: UserReportGenerationComponent,
        canActivate: [AuthGuard, UserGuard],
      },

    ]
  },
  // {
  //   path: '**', redirectTo: ''
  // }
];

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
    UserForgotpassComponent,
    UserForgototpComponent,
    UserHeaderComponent,
    UserSidenavComponent,
    UserProfileComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    ProfileLayoutComponent,
    UserViewAssignedProgramComponent,
    UserReportGenerationComponent,
    UserIdentifyComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserAnimationsModule,
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
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    { 
      provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] 
    },
    { 
      provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT 
    },
  ],
})
export class UserModule {
}
