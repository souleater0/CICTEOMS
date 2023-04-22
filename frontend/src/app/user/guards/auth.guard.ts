import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

interface TokenPayload{
  exp: number;
  // add other properties from your token payload here
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('access_token');

    if(token){
      const tokenPayload = jwt_decode(token) as TokenPayload;
      const currentTime = Math.floor(Date.now() / 1000);
      if(tokenPayload.exp < currentTime){
        this.router.navigate(['/user/login']); //redirect to login if token is expired
        return false;
      }else{
        // User is already authenticated
        if (state.url === '/user/login') {
          // User is trying to access login page, redirect to home
          this.router.navigate(['/user/home']);
          return false;
        } else {
          // User is authenticated, so allow access to the requested route
          return true;
        }
      }
    }else{
        this.router.navigate(['/user/login']); //redirect to login if no token
      return false;
    }
  }

}
