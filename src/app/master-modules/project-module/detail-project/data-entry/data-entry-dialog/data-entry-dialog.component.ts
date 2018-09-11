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
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<DataEntryDialogComponent>,private indicatoFormHttp:IndicatorFormService,
  private indicatorDisaggregationHttp:IndicatorDisaggregationService,private indicatorCalculationMethodHttp:IndicatorCalculationmethodService,private calculationMethodHttp:CalculationMethodService,
  private calculator:CalculatorService,private measuringUnitHttp:MeasuringUnitService,private indicatorHttp:IndicatorService,private formDataHttp:FormsDataService,
  private dataEntriesHttp:DataEntryService) { }

  ngOnInit() {
    this.indicator_id=this.data['indicator_id'];
    this.frequency_symbol=this.data['frequency_symbol'];

    this.indicatorHttp.show(this.indicator_id)
    .subscribe(data=>{
      this.indicators=data['data'];

      this.measuringUnitHttp.show(this.indicators[0]['measuring_unit_id'])
      .subscribe(data=>{
       
      });
    })

    //indicator form data
    this.indicatoFormHttp.show(this.indicator_id)
    .subscribe(data=>{

     this.indicatorForm=data['data'];

     //finding calculation method
     this.calculationMethodHttp.show(this.indicatorForm[0]['calculation_method_id'])
     .subscribe(data=>{
      this.calculationMethod=data['data']['name'];
      
     })
     //end of finding calculation methods

     //assigning disaggregation method
     this.disaggregation=this.indicatorForm[0]['disaggregation'];
     //end of assigning disaggregation methods

     //finding disaggregated items on form data
     this.formDataHttp.show(this.indicatorForm[0]['form_id'])
     .subscribe(data=>{
      this.formDataList=data['data'];
      this.tableRowData=this.formDataList[0]['data'];
      this.json=JSON.parse(this.tableRowData.toString());
      
      for(var i=0;i<this.json.length;i++){
        if(this.json[i][this.disaggregation]!=null){
          this.duplicate.push(this.json[i][this.disaggregation]);
        }
      }
      this.category=this.unique(this.duplicate);
     })
     //end of finding disaggregated items on form data

    });
    //end of indicator form
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
      var count = array.filter((obj) => obj[this.disaggregation] === this.category[i]).length;
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
   console.log(this.frequency_symbol);
   this.dataEntriesHttp.store(this.indicator_id,this.frequency_symbol,this.json.length)
   .subscribe(data=>{
     if(data){
       this.dialogRef.close();
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
