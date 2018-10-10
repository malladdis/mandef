import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close(false);
  }
  remove(){
    this.dialogRef.close(true);
  }

}
