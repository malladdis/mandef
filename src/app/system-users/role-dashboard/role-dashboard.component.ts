import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';

@Component({
  selector: 'app-role-dashboard',
  templateUrl: './role-dashboard.component.html',
  styleUrls: ['./role-dashboard.component.scss']
})
export class RoleDashboardComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  openRoleDialog(){
    const dialogConf=new MatDialogConfig();
    dialogConf.width="30%";
    dialogConf.height="100%";
    this.dialog.open(RoleDialogComponent,dialogConf);
  }

}
