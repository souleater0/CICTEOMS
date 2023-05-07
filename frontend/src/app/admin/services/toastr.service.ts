import { Injectable } from '@angular/core';

declare var toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success(message: string, title?: string) {
    toastr.success(message, title);
  }

  error(message: string, title?: string) {
    toastr.error(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }
}
