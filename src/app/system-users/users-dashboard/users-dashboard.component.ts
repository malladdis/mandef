import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
 const dialogConf=new MatDialogConfig();
  dialogConf.position={
    'top':'0',
    'right':'0'
  };
  dialogConf.width="30%";
  dialogConf.height="100%";
  this.dialog.open(RegisterDialogComponent,dialogConf);

  }

}
