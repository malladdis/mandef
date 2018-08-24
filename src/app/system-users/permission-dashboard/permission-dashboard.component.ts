import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PermissionDialogComponent } from '../permission-dialog/permission-dialog.component';

@Component({
  selector: 'app-permission-dashboard',
  templateUrl: './permission-dashboard.component.html',
  styleUrls: ['./permission-dashboard.component.scss']
})
export class PermissionDashboardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogref:MatDialogRef<PermissionDialogComponent>) { }

  ngOnInit() {
  }

}
