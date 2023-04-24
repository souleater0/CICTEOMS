import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

interface TokenPayload{
  exp: number;
  role: string;
  // add other properties from your token payload here
}

//Auth Guard
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
      if(token!==null && token!==''){
        const tokenPayload = jwt_decode(token) as TokenPayload;
        const currentTime = Math.floor(Date.now() / 1000);
        if(tokenPayload.exp < currentTime){
          if(tokenPayload.role==='user'){
            this.router.navigate(['/user/login']); //redirect to login if token is expired
            return false;
          }
          else if(tokenPayload.role==='admin'){
            this.router.navigate(['/admin/login']); //redirect to login if token is expired
            return false;
          }
          else{
            return false;
          }
        }else{
          // User is already authenticated
            // User is authenticated, so allow access to the requested route
            return true;
        }
      }else{
        this.router.navigate(['/user/login']); //redirect to login if no token
        return false;
      }
  }
}
//User Guard
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('access_token');
      if(token!==null && token!==''){
        const tokenPayload = jwt_decode(token) as TokenPayload;
        if(tokenPayload.role === 'user'){
          return true;
        }else{
          this.router.navigate(['/unauthorized']);
          return false;
        }
      }else{
          this.router.navigate(['/user/login']); //redirect to login if no token
        return false;
      }
  }
}

//Admin Guard
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('access_token');
      if(token!==null && token!==''){
        const tokenPayload = jwt_decode(token) as TokenPayload;
        if(tokenPayload.role === 'admin'){
          return true;
        }else{
          this.router.navigate(['/user/login']);
          return false;
        }
      }else{
          this.router.navigate(['/admin/login']); //redirect to login if no token
        return false;
      }
  }
}


//Login NoAuth
@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  canActivate(): boolean {
    const token = localStorage.getItem('access_token');
    if (token!==null && token!=='') {
      const tokenPayload = jwt_decode(token) as TokenPayload;
      if(tokenPayload.role=='user'){
        this.router.navigate(['/user']);
        return false;
      }
      else if(tokenPayload.role=='admin'){
        this.router.navigate(['/admin']);
        return false;
      }
      else{
        return false;
      }
    }
    else{
      return true;
    }
  }
}
