import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from '../../services/toastr.service';
import { DownloadService } from '../../services/download.service';
import { HttpClient } from '@angular/common/http';

declare var toastr: any;

@Component({
  selector: 'app-admin-download-moa',
  templateUrl: './admin-download-moa.component.html',
  styleUrls: ['./admin-download-moa.component.scss']
})
export class AdminDownloadMoaComponent implements OnInit {
data:any;

  constructor(
    private service: DownloadService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<AdminDownloadMoaComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) data: any)
  {
    this.data = data;
  }
  ngOnInit(): void {
    
  }
  downloadMoa(id:number){
    this.service.downloadFile(id).then(({ blob, fileName }) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
  printMoa(id:number){
    this.service.downloadFile(id).then(({blob}) => {
      const url = window.URL.createObjectURL(blob);
      const newTab = window.open(url);
      if (!newTab) {
        console.error('Failed to open file on a new tab');
      }
    });
  }
}
