import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IndicatorService} from '../log-frame/indicator-tree/services/indicator.service';
import { MeasuringUnitService } from './services/measuring-unit.service';
import { DatatypeService } from './services/datatype.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DataEntryDialogComponent } from './data-entry-dialog/data-entry-dialog.component';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
  projectId: any;
 indicators:Array<any>=[];
 measuringUnit:Array<any>=[];
 indicatorType:Array<any>=[];
  constructor(private route: ActivatedRoute,private indicatorHttp: IndicatorService,private measuringHttp:MeasuringUnitService,
              private dataTypeHttp:DatatypeService,private dialog:MatDialog) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      console.log(this.projectId);
    });

    this.indicatorHttp.index()
    .subscribe(data=>{
      this.indicators=data['data'];
    })
    this.measuringHttp.index()
    .subscribe(data=>{
      this.measuringUnit=data['data'];
    })
    this.dataTypeHttp.index()
    .subscribe(data=>{
      this.indicatorType=data['data'];
    })
    
  }

  getYear(year){
    var date=new Date(year);
    return date.getFullYear();
  }

  unit(id){
    let units= this.measuringUnit.filter(item=>{
      return item.id=id;
    });
    return units[0]['name'];
  }
  type(id){
    let types=this.indicatorType.filter(item=>{
      return item.id=id;
    });
    return types[0]['name'];
  }

  showDialog(indicator){
    const dialogConf=new MatDialogConfig();
    dialogConf.data={
      'indicator':indicator
    }
    dialogConf.width="70%"
    dialogConf.height="90%"
    this.dialog.open(DataEntryDialogComponent,dialogConf);
  }
}
