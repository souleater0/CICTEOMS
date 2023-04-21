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

const routes:Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{
      path: '',
      component: UserLoginComponent
    }]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{
      path: 'user/login',
      component: UserLoginComponent
    }]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{
      path: 'user/home',
      component: UserHomeComponent,
    }]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{
      path: 'user/profile',
      component: UserProfileComponent,
    }]
  }
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
    ProfileLayoutComponent
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
  ]
})
export class UserModule { }
