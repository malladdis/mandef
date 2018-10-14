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
import {
    IndicatorDisaggregationService
} from '../../../data-entry/services/indicator-disaggregation.service';
import { IndicatorFormFieldsService } from '../services/indicator-form-fields.service';

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
  indicatorCalcualtionMethod:Array<any>=[];
  indicatorDisaggregationIsSet:boolean=false;
  indicatorCalculationMethodIsset:boolean=false;
  customForm:Array<any>=[];
   editForm:FormGroup;
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
   isCustomFormChecked:boolean=false;

  private disaggregationId:number;
   calculationMethodId:number;
   selectedField:Array<string>=[];
   count:number=0;
   updateForm:boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<EditIndicatorDialogComponent>,
              private indicatorHttp:IndicatorService,private builder:FormBuilder,private projectServie:ProjectService,private formHttp:CustomFormsService,
              private customFormHttp:CustomFormsService,private calculationHttp:CalculationMethodService,private indicatorFieldsHttp:IndicatorFormFieldsService,
              private formFieldsHttp:FormColumnsService,private indicatorFormHttp:IndicatorFormService) { }

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
      customForm:[''],
      calculationMethod:[],
      fields:[]
    })

    //checking if this indicator is connected with Custom forms
    this.indicatorFormHttp.show(this.data['indicator_id'])
    .subscribe(data=>{
      if(data['data'].length>0){
          this.indicatorFormData=data['data'];
          if(this.indicatorFormData.length>0){
            this.isConnected=true;
            this.formHttp.show(this.indicatorFormData[0]['form_id'])
          .subscribe(data=>{
            this.customForm=data['data'][0];
          })
          }
          
      }
    })
    //end of checking if this indicator is connected with Custom forms

    //finding indicator details information for editing
   this.indicatorHttp.show(this.data['indicator_id'])
    .subscribe(data=>{
      
      this.indicator=data['data'][0];
      this.selectedDataType=this.indicator['type'];
      this.selectedMeasuringUnit=this.indicator['unit'];
      this.selectedFrequency=this.indicator['frequency'];
    }); 
    //end of indicator details editing

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


  showCustoForms(event){
    this.isCustomFormChecked=true;
     //finding list of custom forms
     this.customFormHttp.index()
     .subscribe(data=>{
      this.customForms=data['data'];
     });
     //end of finding custom forms

    

  }

  customFormSelected(form){
    for(let i=0;this.columnName.length;i++){
      this.columnName.splice(i,this.columnName.length);
    }
   this.columnName= form.columns['columns'].split(',');
  }

  fieldsSelected(name){
   this.selectedField.push(name);
  }

  save(){
    this.loading=true;
        if(this.updateForm){
          this.indicatorFormHttp.update(this.data['indicator_id'],this.editForm.get('customForm').value,this.editForm.get('calculationMethod').value)
        .subscribe(data=>{
          setTimeout(() => {
            this.dialogRef.close();
            this.loading=false;
          }, 1000);
         /*  for(let i=0;i<this.selectedField.length;i++){
            this.indicatorFieldsHttp.update(data['data']['id'],this.selectedField[i])
            .subscribe(data=>{
             if(data){
               this.count++;
             }
             if(this.count==this.selectedField.length){
              setTimeout(() => {
                this.dialogRef.close();
                this.loading=false;
                this.loading=false;
              }, 1000);
            }
          })
          
          } */
        }); 
        }else{
          this.indicatorFormHttp.store(this.data['indicator_id'],this.editForm.get('customForm').value,this.editForm.get('calculationMethod').value)
        .subscribe(data=>{
          for(let i=0;i<this.selectedField.length;i++){
            this.indicatorFieldsHttp.store(data['data']['id'],this.selectedField[i])
            .subscribe(data=>{
             if(data){
               this.count++;
             }
             if(this.count==this.selectedField.length){
              setTimeout(() => {
                this.dialogRef.close();
                this.loading=false;
                this.loading=false;
              }, 1000);
            }
          })
          
          }
        }); 
        }

      }

      edit(){
        this.isConnected=false;
        this.updateForm=true;
      }
}
