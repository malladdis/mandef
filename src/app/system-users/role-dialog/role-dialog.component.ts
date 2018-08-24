import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss']
})
export class RoleDialogComponent implements OnInit {
  private registerRole:FormGroup;
  constructor(private formBuilder:FormBuilder,private dialogRef:MatDialogRef<RoleDialogComponent>,private roleHttp:RoleService) { }

  ngOnInit() {
    this.registerRole=this.formBuilder.group({
      name:['',Validators.required],
      description:['']
    })
  }

  closeRoleDialog(){
    this.dialogRef.close();
  }

  addRole(){
    this.roleHttp.store(this.registerRole.value)
    .subscribe(data=>{
      console.log(data);
    })
  }

}
