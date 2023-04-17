import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient
  ) { }

  // login(data:any){
  //   return this.http.post<any>('http://127.0.0.1:8000/api/user/login',data).pipe(map(res =>{
  //     return res;
  //   }),
  //   catchError((err)=>{
  //     return err.error
  //   }));
  // }
}
