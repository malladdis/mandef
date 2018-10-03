import {
    IndicatorFormService
} from '../../log-frame/indicator-tree/services/indicator-form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { IndicatorForm } from '../models/indicatoForms';
import { IndicatorDisaggregationService } from '../services/indicator-disaggregation.service';
import { IndicatorCalculationmethodService } from '../services/indicator-calculationmethod.service';
import { CalculatorService } from '../services/calculator.service';
import { MeasuringUnitService } from '../services/measuring-unit.service';
import { IndicatorService } from '../../log-frame/indicator-tree/services/indicator.service';
import { FormsDataService } from '../../../../../custom-form/services/forms-data.service';
import {
    CalculationMethodService
} from '../../log-frame/indicator-tree/services/calculation-method.service';
import { sum } from 'd3';
import { DataEntryService } from '../services/data-entry.service';
import {
    DisaggreagtionService
} from '../../log-frame/indicator-tree/services/disaggreagtion.service';
import { DataentryDisaggregationService } from '../services/dataentry-disaggregation.service';


@Component({
  selector: 'app-data-entry-dialog',
  templateUrl: './data-entry-dialog.component.html',
  styleUrls: ['./data-entry-dialog.component.scss']
})
export class DataEntryDialogComponent implements OnInit {
  indicator_id:number;
  indicatorForm:Array<IndicatorForm>=[];
  disaggregationMethod:string;
  indicators:Array<any>=[];
  formDataList:Array<FormData>=[];
  tableRowData:string;
  json:string;
  disaggregation:string;
  calculationMethod:string;
  category:Array<any>=[];
  duplicate:Array<any>=[];
  value:Array<any>=[];
  valueData:string;
  grandTotal:number=0;
  isCalculated:boolean=false;
  frequency_symbol:string;
  isDataSent:boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<DataEntryDialogComponent>,private indicatoFormHttp:IndicatorFormService,
  private calculationMethodHttp:CalculationMethodService,private indicatorHttp:IndicatorService,private formDataHttp:FormsDataService,
  private dataEntriesHttp:DataEntryService,private disaggregationHttp:DisaggreagtionService,private dataentryDisaggregationHttp:DataentryDisaggregationService) { }

  ngOnInit() {
    this.indicator_id=this.data['indicator_id'];
    this.frequency_symbol=this.data['frequency_symbol'];

    this.indicatorHttp.show(this.indicator_id)
    .subscribe(data=>{
      this.indicators=data['data'];
      
      //finding indicator calculation method
      this.calculationMethodHttp.show(this.indicators[0]['calculation_method']['calculation_method_id'])
     .subscribe(data=>{
      this.calculationMethod=data['data']['name'];
      console.log(this.calculationMethod);
     })
     //end of finding calculation method

      //finding disaggregation of this indicator
     this.disaggregationHttp.show(this.indicators[0]['disaggregations']['disaggregation_method_id'])
     .subscribe(data=>{
       this.disaggregationMethod=data['data']['name'];
     })
     //end of finding disaggregation of this indicator

     this.indicatoFormHttp.show(this.indicator_id)
     .subscribe(data=>{
       this.indicatorForm=data['data'];

       this.formDataHttp.show(this.indicatorForm[0]['form_id'])
       .subscribe(data=>{
        if(data['data'].length>0){
          this.isDataSent=true;
          this.formDataList=data['data'];
          
        this.tableRowData=this.formDataList[0]['data'];
        this.json=JSON.parse(this.tableRowData.toString());
        for(var i=0;i<this.json.length;i++){
          if(this.json[i][this.disaggregationMethod]!=null){
            this.duplicate.push(this.json[i][this.disaggregationMethod]);
          }
        }
        this.category=this.unique(this.duplicate);
        }
       })

     })

    })

  }

  calculate(){
    switch(this.calculationMethod){
      case "Sum":
      this.findSum()
      break;
    }
   
    
  }
  findSum(){
    this.grandTotal=this.json.length;
    var string =JSON.stringify(this.json);
    var array=JSON.parse(string);
    var allData={};
    this.value.splice(0,this.value.length);

    for(var i=0;i<this.category.length;i++){
      var count = array.filter((obj) => obj[this.disaggregationMethod] === this.category[i]).length;
      allData[this.category[i]]=count;
    }
    this.value.push(allData);

    var stringJson= JSON.stringify(this.value);
    this.valueData=JSON.parse(stringJson);
    if(this.valueData.length>0){
      this.isCalculated=true;
    }
  }
  saveDataEntry(){
   this.dataEntriesHttp.store(this.indicator_id,this.frequency_symbol,this.json.length)
   .subscribe(data=>{
     if(data){
       let jsonData=JSON.stringify(this.value);
       let dataEntryId=data['data']['id'];
      this.dataentryDisaggregationHttp.store(dataEntryId,jsonData)
      .subscribe(data=>{
        if(data['data'].length>0){
          this.dialogRef.close();
        }
      });
     }
   })
  }
  unique(origArr){
    var newArr = [],
    origLen = origArr.length,
    found, x, y;

for (x = 0; x < origLen; x++) {
    found = undefined;
    for (y = 0; y < newArr.length; y++) {
        if (origArr[x] === newArr[y]) {
            found = true;
            break;
        }
    }
    if (!found) {
        newArr.push(origArr[x]);
    }
}
return newArr;
  }

}
