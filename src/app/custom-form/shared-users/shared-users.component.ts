import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SharedFormService } from '../services/shared-form.service';
import { CustomFormsService } from '../custom-forms.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmService } from '../services/confirm.service';

@Component({
  selector: 'app-shared-users',
  templateUrl: './shared-users.component.html',
  styleUrls: ['./shared-users.component.scss']
})
export class SharedUsersComponent implements OnInit {
  form:Array<any>=[];
  sharedUsers:Array<any>=[];
  forms:Array<any>=[];
  moveUser:Array<any>=[];
  showMove:boolean=false;
  isSelected:boolean=false;
  moveForm:FormGroup;
  loading:boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<SharedUsersComponent>, private shredFormHttp:SharedFormService,
              private confirm:ConfirmService,private formHttp:CustomFormsService,private builder:FormBuilder) { }

  ngOnInit() {
    this.moveForm=this.builder.group({
      customForm:['']
    })
    this.form=this.data['form'];
    console.log(this.form['id']);

    //finding list of shared forms
    this.shredFormHttp.show(this.form['id'])
    .subscribe(data=>{
      this.sharedUsers=data['data'];
    });
    //end of finding list of shared forms

    //finding list of custom form
    this.formHttp.index()
    .subscribe(data=>{
      this.forms=data['data'];
    })
    //end of finding custom forms

  }
  formSelected(){
    this.isSelected=true;
    console.log(this.isSelected);
  }

  decline(users){
    this.confirm.confirm('Please confirm',"Are you sure your want to remove "+users.name)
    .subscribe(data=>{
      if(data===true){
        let index = this.sharedUsers.indexOf(users);
        console.log(index)
        this.sharedUsers.splice(index,1);
        this.shredFormHttp.destroy(users['user_id'])
        .subscribe(data=>{
          console.log(data);
        })
      }
    });
   

  }

  editUser(users){
    this.moveUser=users;
    this.showMove=true;
  }
  edit(){
    this.loading=true;
    this.isSelected=false;
    this.shredFormHttp.update(this.moveUser['user_id'],this.moveForm.get('customForm').value)
    .subscribe(data=>{
      setTimeout(() => {
        this.loading=false;
        this.isSelected=true;
        this.dialogRef.close();
      }, 1000);
    })
  }

}
