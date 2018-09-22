import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { DataEntryDialogComponent } from '../data-entry-dialog/data-entry-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {
 @Input() indicator:Array<any>=[];
 months:Array<string>=['January','February','March','April','May','June','July','August','September','October','November','December'];
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    
  }

  getPeriod(year){
    var date=new Date(year);
    var month=date.getMonth()+1;
    return date.getDate()+"/"+month+'/'+date.getFullYear();
   
  }

  addCurrentValue(indicatorId){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.position={
      'top':'0',
      'right':'0'
    }
    dialogConfig.data={
      'indicator_id':indicatorId,
      'frequency_symbol':'Monthly'
    }
    dialogConfig.height="100%";
    dialogConfig.width="30%";

    this.dialog.open(DataEntryDialogComponent,dialogConfig);
   }

}
