import {
    IndicatorFormService
} from '../../log-frame/indicator-tree/services/indicator-form.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { CustomFormsService } from '../../../../../custom-form/custom-forms.service';
import { Forms } from '../../../../../models/forms';
import { Columns } from '../../../../../models/columns';
import { FormColumnsService } from '../../../../../custom-form/services/form-columns.service';
import { FormsDataService } from '../../../../../custom-form/services/forms-data.service';
import { CalculationMethodService } from '../../log-frame/indicator-tree/services/calculation-method.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-data-entry-dialog',
  templateUrl: './data-entry-dialog.component.html',
  styleUrls: ['./data-entry-dialog.component.scss']
})
export class DataEntryDialogComponent implements OnInit {
  indicators:Array<any>=[];
  id:number;
   myForm:Array<Forms>=[];
   myColumn:Array<Columns>=[];
   columnName:Array<string>=[];
   formDataList:Array<FormData>=[];
   tableRowData:string;
   json:any;
   formId:number;
   isConnected:boolean=false;
   calculaitonMethod:Array<string>=[];
   selectedCalculationMethod:string;
   selectedFields:Array<string>=[];
   dataEntryForm:FormGroup;
   newColumnName:Array<string>=[];
   nameOfNewColumn:string='';
   total:number=0;
   fieldData:Array<string>=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private indicatorFormHttp: IndicatorFormService,private customForm: CustomFormsService,private builder:FormBuilder, 
              private columnsHtpp: FormColumnsService, private formDataHttp: FormsDataService,private calculationMethodHttp:CalculationMethodService) { }

  ngOnInit() {

    this.dataEntryForm=this.builder.group({
      calculatioMethod:[''],
      fields:['']
    })

    this.indicators=this.data['indicator'];
    this.id= this.indicators['id'];

      this.indicatorFormHttp.show(this.indicators['id'])
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

      //finding calculation methods
      this.calculationMethodHttp.index()
      .subscribe(data=>{
        this.calculaitonMethod=data['data'];
      })
      //end of calculation methods

      

  }

  calculationMethodSelected(method){
    this.selectedCalculationMethod=method;
  
  }

  arrayToString(data){
    let response:Array<string>=[];
    for(let i=0;i<data.length;i++){
      response.push(data[i]['name'])
    }
    return response.toString();
  }

  fieldSelected(field){
    this.selectedFields.push(field);
  }

  calculate(){
    switch(this.selectedCalculationMethod.toLowerCase()){
      case "row summation":
      this.rowSummation(this.selectedFields);
      break;
      case "column summation":
      this.columnSummation(this.selectedFields);
      break;
      case "count by dissagregation":
      break;

    }
  }
  rowSummation(fields){
    console.log(fields);

    for(let i=0;i<fields.length;i++){
      this.newColumnName.push(fields[i]);
    }
    this.nameOfNewColumn=this.newColumnName.toString();
    

    //finding form data
    this.formDataHttp.show(this.formId).subscribe(data => {
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
    this.columnsHtpp.show(this.formId).subscribe(data => {
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
      this.columnsHtpp.show(this.formId).subscribe(data => {
      this.myColumn = data['data'];
      this.columnName = this.myColumn[0].columns.split(',');
      });
      //end of finding the column names of the form

      //finding form data
    this.formDataHttp.show(this.formId).subscribe(data => {
      if (data['data'].length > 0) {
  
        this.formDataList = data['data']; //finding columns names of the form
        this.columnsHtpp.show(this.formId).subscribe(data => {
          this.myColumn = data['data'];
          this.columnName = this.myColumn[0].columns.split(',');
          });
          //end of finding the column names of the form
    
          //finding form data
        this.formDataHttp.show(this.formId).subscribe(data => {
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

countByDisaggregation(fields){
  
}
}
