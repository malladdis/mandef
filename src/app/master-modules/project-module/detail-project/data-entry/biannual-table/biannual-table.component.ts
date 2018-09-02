import { DataEntryService } from '../services/data-entry.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataEntry } from '../models/dataentryindicator';
import { PeriodsService } from '../services/periods.service';
import { DataEntryDialogComponent } from '../data-entry-dialog/data-entry-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-biannual-table',
  templateUrl: './biannual-table.component.html',
  styleUrls: ['./biannual-table.component.scss']
})
export class BiannualTableComponent implements OnInit {
  @Input() indicator:Array<any>=[];
  dataEntry:Array<DataEntry>=[];
  current:string;
  constructor(private dataEntryHttp:DataEntryService,private period:PeriodsService,private dialog:MatDialog) { }

  ngOnInit() {
    for(var i=0;i<this.indicator.length;i++){
      this.getPast(this.indicator[i].id);
    }

    this.period.current("biannual")
    .subscribe(data=>{
      this.current=data['data'];
    });
  }
  getPast(indicatorId){
    this.dataEntryHttp.show(indicatorId)
    .subscribe(data=>{
     this.dataEntry=data['data'];
    })
  }
 
  getPeriod(year){
    var date=new Date(year);
    var month=date.getMonth()+1;
    if(month<7){
      return "H1 "+date.getFullYear();
    }else {
      return "H2 "+date.getFullYear();
    }
  }

  getPastname(id){
  var items= this.dataEntry.filter(item=>{
     return item.indicator_id=id;
    });
    return items[0]['frequency_symbol'];
  }

  getPastValue(id){
    var items= this.dataEntry.filter(item=>{
      return item.indicator_id=id;
     });
     return items[0]['actual_value'];
   }

   getSpan(){
     return this.dataEntry.length;
   }

   addCurrentValue(indicatorId){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.position={
      'top':'0',
      'right':'0'
    }
    dialogConfig.data={
      'indicator_id':indicatorId
    }
    dialogConfig.height="100%";
    dialogConfig.width="40%";

    this.dialog.open(DataEntryDialogComponent,dialogConfig);
   }
  

}
