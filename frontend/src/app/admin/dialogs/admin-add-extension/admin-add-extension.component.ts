import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminExtensionService } from '../../services/admin-extension.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../services/toastr.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-add-extension',
  templateUrl: './admin-add-extension.component.html',
  styleUrls: ['./admin-add-extension.component.scss']
})
export class AdminAddExtensionComponent implements OnInit{
  extensionForm!: FormGroup;
  listPartners!: any[];
  suggestions: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private datePipe : DatePipe,
    private toastr : ToastrService,
    private dialogref: MatDialogRef<AdminAddExtensionComponent>,
    private service: AdminExtensionService
  ){
      this.extensionForm = this.formBuilder.group({
        program_Title : '',
        start_Date : '',
        end_Date : '',
        place : '',
        program_Lead : '',
        program_Members : '',
        participants : '',
        program_Flow : '',
        program_Details : '',
        programFlow : '',
        partners : '',
      });
  }
  ngOnInit(): void {
      //get partners
      this.service.getPartner().subscribe((data:any)=>{
        this.listPartners = data;
        console.log(data);
      });
  }
  getFile(data:any){}
  addExtension(){
    const startDate = this.datePipe.transform(this.extensionForm.get('start_Date')?.value, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(this.extensionForm.get('end_Date')?.value, 'yyyy-MM-dd');

    const payload = {
      program_Title : this.extensionForm.get('program_Title')?.value,
      start_Date : startDate,
      end_Date : endDate,
      place : this.extensionForm.get('place')?.value,
      program_Lead : this.extensionForm.get('program_Lead')?.value,
      program_Members : this.extensionForm.get('program_Members')?.value,
      participants : this.extensionForm.get('participants')?.value,
      program_Flow : this.extensionForm.get('program_Flow')?.value,
      program_Details : this.extensionForm.get('program_Details')?.value,
      programFlow : this.extensionForm.get('programFlow')?.value,
      partners : this.extensionForm.get('partners')?.value,
    }
    this.service.addExtension(payload).subscribe(
      (response : any)=>{
        this.toastr.success(response.message);
        console.log(response);
        this.dialogref.close();
      },error=>{
        this.toastr.warning(error.error.message);
        console.log(error.error.message);
      }
    )
  }
  //program_Members
  onInputChange() {
    const inputValue = this.extensionForm.get('program_Members')?.value;
    const words = inputValue.split(',');
    const lastWord = words[words.length - 1].trim();
    if (lastWord.length > 0) {
      this.service.getSuggestion(lastWord).subscribe((data) => {
        this.suggestions = data;
      });
    } else {
      this.suggestions = [];
    }
  }

  onSuggestionClick(suggestion: string) {
    const inputValue = this.extensionForm.get('program_Members')?.value;
    const words = inputValue.split(',');
    words[words.length - 1] = suggestion;
    this.extensionForm.get('program_Members')?.setValue(words.join(', '));
    this.suggestions = [];
  }
}
