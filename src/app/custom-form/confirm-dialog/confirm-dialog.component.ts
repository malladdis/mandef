import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
   title:  string;
  message: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef:  MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close(false);
  }
  remove()  {
    this.dialogRef.close(true);
  }

}
