import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomFormsService } from '../custom-forms.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  createForm:FormGroup;
  isChecked=true;
  public title:string;
  constructor(private dialogref:MatDialogRef<DialogBodyComponent>,private formBuilder:FormBuilder,private http:CustomFormsService,
    private router:Router) { }

  ngOnInit() {

    this.createForm=this.formBuilder.group({
      title:['',Validators.required],
      description:['']
    });
  }

  checkedUp(){
    this.isChecked=false;
  }
  close(){
   this.dialogref.close();
  }
  save(){
   this.title=this.createForm.value.title;
   this.http.create(this.createForm).subscribe(data=>{
     this.dialogref.close();
     this.router.navigate(['/auth/custom-forms/form-design',data['data']['id']]);
   },error=>{

   });
  }

}
