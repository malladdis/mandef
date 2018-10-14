import {
    EditIndicatorDialogComponent
} from './edit-indicator-dialog/edit-indicator-dialog.component';
import { MatDialogConfig } from '@angular/material';
import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-indicator-tree',
  templateUrl: './indicator-tree.component.html',
  styleUrls: ['./indicator-tree.component.scss']
})
export class IndicatorTreeComponent implements OnInit {
  @Input() indicator: any;
  constructor(private matDialog:MatDialog) { }

  ngOnInit() {
  }

  editIndicator(indicator){
    const editDialogConf=new MatDialogConfig();
    editDialogConf.data={
      'indicator_id':indicator.id
    };
    this.matDialog.open(EditIndicatorDialogComponent,editDialogConf);
  }

}
