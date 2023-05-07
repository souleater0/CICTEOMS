import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }
  getAdminInfo(): Observable<any>{
    const token = localStorage.getItem('access_token') !== null;
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(`${this.apiUrl}/admin`,options);
  }
}
