import { Component, OnInit, Input } from '@angular/core';
import { EditIndicatorDialogComponent } from '../../../master-modules/project-module/detail-project/log-frame/indicator-tree/edit-indicator-dialog/edit-indicator-dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { IndicatorFormService } from '../../../master-modules/project-module/detail-project/log-frame/indicator-tree/services/indicator-form.service';
import { DatatypeService } from '../../../master-modules/project-module/detail-project/data-entry/services/datatype.service';
import { MeasuringUnitService } from '../../../master-modules/project-module/detail-project/data-entry/services/measuring-unit.service';
import { IndicatorService } from '../../../master-modules/project-module/detail-project/log-frame/indicator-tree/services/indicator.service';
import { FormsDataService } from '../../../custom-form/services/forms-data.service';
import { FormColumnsService } from '../../../custom-form/services/form-columns.service';
import { Columns } from '../../../models/columns';
import $ from 'jquery';
import { CalculationMethodService } from '../../../master-modules/project-module/detail-project/log-frame/indicator-tree/services/calculation-method.service';

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
  actualJson:any;
  json:any;
  formId:number;
  myColumn:Array<Columns>=[];
  columnName:Array<string>=[];
  isConnected:boolean=false;
  fieldData:Array<string>=[];
  newColumnName:Array<string>=[];
   nameOfNewColumn:string='';
   formDataList:Array<FormData>=[];

  constructor(private indicatorFormHttp:IndicatorFormService,private indicatorhttp:IndicatorService, private measuringHttp:MeasuringUnitService,
              private dataTypeHttp:DatatypeService,private indicatorFormData:FormsDataService,private formColumnHttp:FormColumnsService,
              private calculationMethodHttp:CalculationMethodService) { }

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
      this.formId=this.indicatorForm[0]['form_id'];
      //finding indicators actual value
      this.indicatorFormData.show(this.indicatorForm[0]['form_id'])
      .subscribe(data=>{
        this.actualData=data['data'];
        this.tableRowData = this.actualData[0]['data'];
            this.actualJson = JSON.parse(this.tableRowData.toString());
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

    let result =(actualvalue/targetValue)*100;

    return result+"%";
  }

  showActualData(){
  $(document).find('.actual-data').css('display','block');
   this.indicatorFormHttp.show(this.indicator['id'])
      .subscribe(data => {
          this.isConnected=true;
          let fields=data['data'][0]['fields'];
          console.log(fields);
          for(let i=0;i<fields.length;i++){
            this.fieldData.push(fields[i]['name']);
          }

          this.formId = data['data'][0]['form_id'];
          let calculationMethodId = data['data'][0]['calculation_method_id'];
          this.calculationMethodHttp.show(calculationMethodId)
          .subscribe(data=>{
            let calculationMethodName=data['data']['name'].toLowerCase();
            switch(calculationMethodName){
              //row summation
              case "row summation":
              this.rowSummation(this.fieldData);
              break;

              //column summation
              case "column summation":
              this.columnSummation(this.fieldData);
              break;
            }
          })
      });


    this.formColumnHttp.show(this.formId)
    .subscribe(data=>{
      this.myColumn = data['data'];
      this.columnName = this.myColumn[0].columns.split(',');
    })
  }

  rowSummation(fields){
    console.log(fields);

    for(let i=0;i<fields.length;i++){
      this.newColumnName.push(fields[i]);
    }
    this.nameOfNewColumn=this.newColumnName.toString();
    

    //finding form data
    this.indicatorFormData.show(this.formId).subscribe(data => {
    if (data['data'].length > 0) {

      this.formDataList = data['data'];
      this.tableRowData = this.formDataList[0]['data'];
      this.json = JSON.parse(this.tableRowData.toString());
      
      for(let i=0;i<this.json.length;i++){
        let obj=this.json[i];
        let total=0;
        for(let j=0;j<fields.length;j++){
          total+=Number(obj[fields[j]]); 
        }
        obj["Sum of ["+this.newColumnName+"]"]=total;
        total=0;
      }
    }
  });
  //end of finding form data

    //finding columns names of the form
    this.formColumnHttp.show(this.formId).subscribe(data => {
    this.myColumn = data['data'];
    this.columnName = this.myColumn[0].columns.split(',');
    this.columnName.splice(this.columnName.indexOf(fields.pop())+1,0,"Sum of ["+this.nameOfNewColumn+"]");
    });
    //end of finding the column names of the form
  }


  columnSummation(fields){
    $(document).ready(()=>{

      $(document).find('.total').css('display','');
       //finding columns names of the form
      this.formColumnHttp.show(this.formId).subscribe(data => {
      this.myColumn = data['data'];
      this.columnName = this.myColumn[0].columns.split(',');
      });
      //end of finding the column names of the form

      //finding form data
    this.indicatorFormData.show(this.formId).subscribe(data => {
      if (data['data'].length > 0) {
  
        this.formDataList = data['data']; //finding columns names of the form
        this.formColumnHttp.show(this.formId).subscribe(data => {
          this.myColumn = data['data'];
          this.columnName = this.myColumn[0].columns.split(',');
          });
          //end of finding the column names of the form
    
          //finding form data
        this.indicatorFormData.show(this.formId).subscribe(data => {
          if (data['data'].length > 0) {
      
            this.formDataList = data['data'];
            this.tableRowData = this.formDataList[0]['data'];
            this.json = JSON.parse(this.tableRowData.toString());
            let total=0;
            for(let i=0;i<fields.length;i++){
              let name=fields[i];
              total+= this.json.map(bill => bill[name]).reduce((acc, bill) => Number(bill) + Number(acc));
              console.log(total);
              total=0;
            }
            
          }
        });
        this.tableRowData = this.formDataList[0]['data'];
        this.json = JSON.parse(this.tableRowData.toString());
        let total=0;
        for(let i=0;i<fields.length;i++){
          let name=fields[i];
          total+= this.json.map(bill => bill[name]).reduce((acc, bill) => Number(bill) + Number(acc));
          $(document).find("#"+fields[i]+"").text("Total = "+total);
          total=0;
        }
        
      }
    });


    })
   
}

  
}