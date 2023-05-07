import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminExtensionService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

    //Get Extensions
    getExtension(): Observable<any>{
      const url = `${this.apiUrl}/admin/extensions`;
      return this.http.get(url);
    }

    //Get Faculty Member Suggestion
    getSuggestion(value:string): Observable<string[]>{
      return this.http.get<string[]>(`${this.apiUrl}/user/suggestPartner?q=${value}`);
    }
  
    //Get Partners
    getPartner(): Observable<any>{
      const url = `${this.apiUrl}/admin/partners`;
      return this.http.get(url);
    }

    //View Extension
    viewExtension( id: number): Observable<any>{
      const url = `${this.apiUrl}/admin/view-extensions/${id}`;
      return this.http.get(url);
    }
    
    //Add Extension
    addExtension(data:any){
      const url = `${this.apiUrl}/admin/add-extensions/`;
      return this.http.post(url,data);
    }

    //Update Extension
    updateExtension(id:number, data: any){
      const url = `${this.apiUrl}/admin/update-extensions/${id}`;
      return this.http.put(url, data);
    }

    //Archive Extension
    archiveExtension( id: number): Observable<any>{
      const data = {isArchive:'1'};
      const url = `${this.apiUrl}/admin/archive-extensions/${id}`;
      return this.http.put(url, data);
    }




}
