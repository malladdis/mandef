import {DialogBodyComponent} from '../dialog-body/dialog-body.component';
import {MatDialogConfig} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-forms-dashboard',
  templateUrl: './forms-dashboard.component.html',
  styleUrls: ['./forms-dashboard.component.css']
})
export class FormsDashboardComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog() {
    const matDialogConf = new MatDialogConfig();
    matDialogConf.height = '50%';
    matDialogConf.width = '30%';
    this.dialog.open(DialogBodyComponent, matDialogConf);
  }

}
