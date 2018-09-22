import { IndicatorService } from '../services/indicator.service';
import { th } from 'fontawesome';
import { Indicators } from '../../../../../../models/indicators';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../../../../project.service';
import { DataType } from '../../../../../../models/dataTypes';
import { CustomFormsService } from '../../../../../../custom-form/custom-forms.service';
import { DisaggreagtionService } from '../services/disaggreagtion.service';
import { CalculationMethodService } from '../services/calculation-method.service';
import { FormColumnsService } from '../../../../../../custom-form/services/form-columns.service';
import { Columns } from '../../../../../../models/columns';
import {
    IndicatorCalculationMethodService
} from '../services/indicator-calculation-method.service';
import { IndicatorFormService } from '../services/indicator-form.service';

@Component({
  selector: 'app-edit-indicator-dialog',
  templateUrl: './edit-indicator-dialog.component.html',
  styleUrls: ['./edit-indicator-dialog.component.scss']
})
export class EditIndicatorDialogComponent implements OnInit {
  indicator:Array<Indicators>=[];
  dataType:Array<DataType>=[];
  measuringUnit:Array<any>=[];
  frequencies:Array<any>=[];
  selectedDataType:Array<DataType>=[];
  selectedMeasuringUnit:Array<any>=[];
  selectedFrequency:Array<any>=[];
  selectedIndicatorDisaggregations:Array<any>=[];
  selectedindicatorCalculationMethod:Array<any>=[];
  indicatorDisagregations:Array<any>=[];
  customForm:Array<any>=[];
  private editForm:FormGroup;
  isChecked:boolean=false;
  disaggregationMethod:Array<any>=[];
  customForms:Array<any>=[];
  calculationMethod:Array<any>=[];
  customFormFields:Array<any>=[];
  myColumn:Array<Columns>=[];
   columnName:Array<string>=[];
   loading=false;
   customFormName:string
   isConnected:boolean=false;
   
   indicatorFormData:Array<any>=[];
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<EditIndicatorDialogComponent>,
              private indicatorHttp:IndicatorService,private builder:FormBuilder,private projectServie:ProjectService,private formHttp:CustomFormsService,
              private customFormHttp:CustomFormsService,private disaggregationHttp:DisaggreagtionService,private calculationHttp:CalculationMethodService,
              private formFieldsHttp:FormColumnsService,private indicatorCalculationMethodHttp:IndicatorCalculationMethodService,private indicatorFormHttp:IndicatorFormService) { }

  ngOnInit() {
    this.editForm=this.builder.group({
      name:[''],
      description:[''],
      type:[''],
      baseLine:[''],
      baseLineDate:[''],
      measuringUnit:[''],
      frequency:[''],
      source:[''],
      disaggregation:[''],
      customForm:[''],
      customFormcalculationMethod:[''],
      customFormValueField:[''],
      indicatorCalcualtionMethod:[''],
      calculationMethod:['']
    })

    //finding previus inserted indicator form data if it exists
    this.indicatorFormHttp.show(this.data['indicator_id'])
    .subscribe(data=>{
      if(data['data'].length>0){

          this.indicatorFormData=data['data'];
          this.formHttp.show(this.indicatorFormData[0]['form_id'])
          .subscribe(data=>{
            this.customForm=data['data'][0];
            console.log(this.customForm);
          })

      }
    })
    //end of finding previus inserted indicator form data

   this.indicatorHttp.show(this.data['indicator_id'])
    .subscribe(data=>{
      
       this.indicator=data['data'][0];
      this.selectedDataType=this.indicator['type'];
      this.selectedMeasuringUnit=this.indicator['unit'];
      this.selectedFrequency=this.indicator['frequency'];
      this.indicatorDisagregations=this.indicator['disaggregations'];

    if(this.indicatorDisagregations.length>0){
      this.isChecked=true;
      this.disaggregationHttp.show(this.indicatorDisagregations[0]['disaggregation_method_id'])
      .subscribe(data=>{
        this.selectedIndicatorDisaggregations=data['data'];
      })
    } 
    }); 

    
    this.projectServie.getDatatypes()
    .subscribe(data=>{
      this.dataType=data['data'];
    });

    this.projectServie.getMeasuringUnits()
    .subscribe(data=>{
      this.measuringUnit=data['data'];
    });

    this.projectServie.getFrequencies()
    .subscribe(data=>{
      this.frequencies=data['data'];
    });

    this.projectServie.getDisaggregationMethods()
    .subscribe(data=>{
      this.disaggregationMethod=data['data'];
    });

    this.calculationHttp.index()
    .subscribe(data=>{
      this.calculationMethod=data['data'];
    });

  }

  typeSelected(type){

  }

  customFormDissagregationMethod(fields){
    console.log(fields);
  }

  showCustoForms(event){
    
    if(this.indicatorFormData.length<=0){
      this.indicatorFormHttp.show(this.data['indicator_id'])
    .subscribe(data=>{
      if(data['data'].length>0){
        console.log('true');
      }else{
       
      this.customFormHttp.index()
    .subscribe(data=>{
      this.customForms=data['data'];
    }); 

      }
    });
    }else{
      this.isConnected=true;
    }

  }

  customFormSelected(form){
    this.columnName.splice(0,this.columnName.length);
    this.customFormName=form.title;
   this.formFieldsHttp.show(form.id)
   .subscribe(data=>{
    this.myColumn=data['data'];
    this.columnName= this.myColumn[0].columns.split(',');
    
   })
  }

  save(){
    this.loading=true;
    this.indicatorCalculationMethodHttp.store(this.data['indicator_id'],this.editForm.get('indicatorCalcualtionMethod').value)
    .subscribe(data=>{
      if(data){
        this.indicatorFormHttp.store(this.data['indicator_id'],this.editForm.get('customForm').value,this.editForm.get('customFormcalculationMethod').value,this.editForm.get('customFormValueField').value)
        .subscribe(data=>{
          if(data['data']){
            this.dialogRef.close();
          }
        });

      }
    });
    
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
