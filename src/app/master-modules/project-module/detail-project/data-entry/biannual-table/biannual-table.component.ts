import { DataEntryService } from '../services/data-entry.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataEntry } from '../models/dataentryindicator';
import { PeriodsService } from '../services/periods.service';
import { DataEntryDialogComponent } from '../data-entry-dialog/data-entry-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShowAllComponent } from '../show-all/show-all.component';


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
    this.getPast(this.indicator[0].id);

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
     return this.dataEntry.length*3;
     
   }

   getTotal(){
     let sum=0;
     let data= this.dataEntry.filter((d)=>d.id==3);
    for(let i=0;i<data.length;i++){
      for(let j=0;j<this.dataEntry[i]['disaggregation'].length;j++){
        sum=sum+this.dataEntry[i]['disaggregation'][j]['value'];
      }
    }
    return sum;
   }

   addCurrentValue(indicatorId){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.position={
      'top':'0',
      'right':'0'
    }
    dialogConfig.data={
      'indicator_id':indicatorId,
      'frequency_symbol':this.current[0]
    }
    dialogConfig.height="100%";
    dialogConfig.width="30%";

    this.dialog.open(DataEntryDialogComponent,dialogConfig);
   }

   showAll(id){
     const showAllDialogConf=new MatDialogConfig();
     showAllDialogConf.data={
       'indicator_id':id
     }
     showAllDialogConf.width="60%";
     showAllDialogConf.height="60%";
     this.dialog.open(ShowAllComponent,showAllDialogConf);
   }
  

}
