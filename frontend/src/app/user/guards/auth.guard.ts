import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('access_token') !== null;
    if(token){
      // User is already authenticated
      if (state.url === '/user/login' || state.url === '/user' || state.url === '/') {
        // User is trying to access login page, redirect to home
        this.router.navigate(['/user/home']);
        return false;
      } else {
        // User is authenticated, so allow access to the requested route
        return true;
      }
    }else{
        this.router.navigate(['/user/login']);
      return false;
    }
  }

}
