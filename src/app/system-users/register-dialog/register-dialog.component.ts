import { from } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import $ from "jquery";
import { RoleService } from '../services/role.service';
import { Role } from '../models/roles';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  private registerForm:FormGroup;
  private generatedPassword:string="";
  private loading:boolean=false;
  private submited:boolean=false;
  private valid:boolean=false;
  private roles:Array<Role>=[];
  constructor(private formBuilder:FormBuilder,private dialogref:MatDialogRef<RegisterDialogComponent>,private rolHttp:RoleService,
             private usersHttp:UsersService) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      name:['',Validators.required],
      role_id:[''],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

    this.rolHttp.index().subscribe(data=>{
      this.roles=data['data'];
      console.log(this.roles);
    });

  }

 closeDialog(){
   this.dialogref.close();
 }
 f(){
   return this.registerForm.controls
 }

 roleSelected(id){
   console.log(id);
}

 generatePassword(){
   $(document).ready(()=>{

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var text="";
    for (var i = 0; i < 6; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }  
    this.registerForm.get('password').setValue(text);      
   });
 }

  registerUsers(){
    this.submited=true;
    this.usersHttp.store(this.registerForm.value)
    .subscribe(data=>{
      console.log(data);
    })
   
  }

}
