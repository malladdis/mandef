import { Component, OnInit } from '@angular/core';
import { Role } from '../models/roles';
import { RoleService } from '../services/role.service';
import { MatDialogConfig } from '@angular/material';
import { MatDialog } from '@angular/material';
import { PermissionDialogComponent } from '../permission-dialog/permission-dialog.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
private roles:Array<Role>=[];
  constructor(private rolesHttp:RoleService,private permissionDialog:MatDialog,private usersDialog:MatDialog) { }

  ngOnInit() {

    this.rolesHttp.index()
    .subscribe(data=>{
      this.roles=data['data'];
    });
  }

  permission(role){
    const dialogConf=new MatDialogConfig();
    dialogConf.data={
      'id':role.id,
      'name':role.name
    };
    dialogConf.width="50%";
    dialogConf.height="60%";
    this.permissionDialog.open(PermissionDialogComponent,dialogConf);
  }

  role(id){

    const dialogConf=new MatDialogConfig();
    dialogConf.data={
      'id':id
    };
    this.permissionDialog.open(UserDialogComponent,dialogConf);

  }

}
