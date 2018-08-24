import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ActivityDialogComponent} from '../activity-dialog/activity-dialog.component';

@Component({
  selector: 'app-indicator-dialog',
  templateUrl: './indicator-dialog.component.html',
  styleUrls: ['./indicator-dialog.component.scss']
})
export class IndicatorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IndicatorDialogComponent>) { }

  ngOnInit() {
  }

}
