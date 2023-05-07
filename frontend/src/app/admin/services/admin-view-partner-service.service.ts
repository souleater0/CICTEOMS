import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminViewPartnerServiceService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }
  getPartner(){
    const url = `${this.apiUrl}/admin/partners`;
    return this.http.get(url);
  }

    //View Partner
    viewParter( id: number): Observable<any>{
      const url = `${this.apiUrl}/admin/view-partners/${id}`;
      return this.http.get(url);
    }

    //Archive Partner
    archivePartner( id: number): Observable<any>{
      const data = {isArchive:'1'};
      const url = `${this.apiUrl}/admin/archive-partners/${id}`;
      return this.http.put(url, data);
    }
    //Update Partner
    updatePartner(id:number, data: any){
      const url = `${this.apiUrl}/admin/update-partners/${id}`;
      return this.http.put(url, data);
    }

    //Add Partner
    addPartner(data:any){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data'
        })
      };
      const url = `${this.apiUrl}/admin/add-partners/`;
      return this.http.post<any>(url,data, httpOptions);
    }
}
