import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(): Observable<any>{
    const token = localStorage.getItem('access_token') !== null;
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(`${this.apiUrl}/user`,options);
  }
}
