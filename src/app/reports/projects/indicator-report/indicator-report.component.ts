import { Component, OnInit, Input } from '@angular/core';
import { EditIndicatorDialogComponent } from '../../../master-modules/project-module/detail-project/log-frame/indicator-tree/edit-indicator-dialog/edit-indicator-dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { IndicatorFormService } from '../../../master-modules/project-module/detail-project/log-frame/indicator-tree/services/indicator-form.service';
import { DatatypeService } from '../../../master-modules/project-module/detail-project/data-entry/services/datatype.service';
import { MeasuringUnitService } from '../../../master-modules/project-module/detail-project/data-entry/services/measuring-unit.service';
import { IndicatorService } from '../../../master-modules/project-module/detail-project/log-frame/indicator-tree/services/indicator.service';
import { FormsDataService } from '../../../custom-form/services/forms-data.service';

@Component({
  selector: 'app-indicator-report',
  templateUrl: './indicator-report.component.html',
  styleUrls: ['./indicator-report.component.scss']
})
export class IndicatorReportComponent implements OnInit {
  @Input() indicator: any;
  measuringUnit:Array<any>=[];
 indicatorType:Array<any>=[];
 indicatorsData:Array<any>=[];
 actualData:Array<any>=[];
 indicatorForm:Array<any>=[];
 tableRowData:string;
 json:any;
  constructor(private indicatorFormHttp:IndicatorFormService,private indicatorhttp:IndicatorService, private measuringHttp:MeasuringUnitService,
              private dataTypeHttp:DatatypeService,private indicatorFormData:FormsDataService) { }

  ngOnInit() {

    
    
    //finding indicatos data 
    this.indicatorhttp.show(this.indicator.id)
    .subscribe(data=>{
      this.indicatorsData=data['data'];
      
    })
    //end of finding indicators data

    this.indicatorFormHttp.show(this.indicator.id)
    .subscribe(data=>{

      this.indicatorForm=data['data'];
      //finding indicators actual value
      this.indicatorFormData.show(this.indicatorForm[0]['form_id'])
      .subscribe(data=>{
        this.actualData=data['data'];
        this.tableRowData = this.actualData[0]['data'];
            this.json = JSON.parse(this.tableRowData.toString());
        console.log(this.actualData);
      })
      //end of finding indicators actual value
    })

    //finding indicatos measuring unit
    this.measuringHttp.index()
    .subscribe(data=>{
      this.measuringUnit=data['data'];
    })
    //end of finding indicatos measuring uint

    //finding indicators type
    this.dataTypeHttp.index()
    .subscribe(data=>{
      this.indicatorType=data['data'];
    })
    //end of finding indicators type

    
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

  progress(targetValue,actualvalue){
    let decrease = targetValue-actualvalue;

    let result =(decrease/targetValue)*100;

    return result+"%";
  }

  
}