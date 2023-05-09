import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  downloadFile(id: number): Promise<{blob:Blob, fileName:string}> {
    const url = `${this.apiUrl}/admin/partners/download-moa/${id}`;
    return this.http.get<{ file: string, fileType: string, fileName:string}>(url, { responseType: 'json' }).toPromise().then((data) => {
      if (data) {
        const fileBase64: string = data.file;
        const fileType: string = data.fileType;
        const fileName: string = data.fileName;
        // const fileExt: string = data.fileExt;
        const fileBytes: Uint8Array = new Uint8Array(atob(fileBase64).split('').map((char) => char.charCodeAt(0)));
        const blob = new Blob([fileBytes], { type: fileType });
        return { blob, fileName};
      } else {
        throw new Error('Data is undefined');
      }
    });
  }

  // downloadMoa(id: number){
  //   const url = `${this.apiUrl}/admin/partners/download-moa/${id}`;
  //   return this.http.get<any>(url);
  // }

  printMoa(id:number){
  }
}
