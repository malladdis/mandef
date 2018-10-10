import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  private dialogRef:MatDialogRef<ConfirmDialogComponent>
  constructor(private dialog:MatDialog) { }
 
  confirm(title:string,message:string):Observable<any>{
    this.dialogRef=this.dialog.open(ConfirmDialogComponent);
    this.dialogRef.updatePosition({top:'50px'})
    this.dialogRef.componentInstance['title']=title;
    this.dialogRef.componentInstance['message']=message;
    this.dialogRef.componentInstance['btnOkText']="Yes";
    this.dialogRef.componentInstance['btnCancelText']="No"
    return this.dialogRef.afterClosed();

  }
}
