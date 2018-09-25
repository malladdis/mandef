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

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<EditIndicatorDialogComponent>,
              private indicatorHttp:IndicatorService,private builder:FormBuilder,private projectServie:ProjectService,private formHttp:CustomFormsService,
              private customFormHttp:CustomFormsService,private disaggregationHttp:DisaggreagtionService,private calculationHttp:CalculationMethodService,
              private formFieldsHttp:FormColumnsService,private indicatorCalculationMethodHttp:IndicatorCalculationMethodService,private indicatorFormHttp:IndicatorFormService,
              private indicatorDisaggregationHttp:IndicatorDisaggregationService) { }

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
      disaggregation:[],
      customForm:[''],
      customFormcalculationMethod:[''],
      customFormValueField:[''],
      indicatorCalcualtionMethod:[''],
      calculationMethod:['']
    })

    //checking if this indicator is connected with Custom forms
    this.indicatorFormHttp.show(this.data['indicator_id'])
    .subscribe(data=>{
      if(data['data'].length>0){
          this.indicatorFormData=data['data'];
          this.formHttp.show(this.indicatorFormData[0]['form_id'])
          .subscribe(data=>{
            this.customForm=data['data'][0];
          })
      }
    })
    //end of checking if this indicator is connected with Custom forms

    //finding indicator details information for editing
   this.indicatorHttp.show(this.data['indicator_id'])
    .subscribe(data=>{
      
      this.indicator=data['data'][0];
      console.log(this.indicator);
      this.selectedDataType=this.indicator['type'];
      this.selectedMeasuringUnit=this.indicator['unit'];
      this.selectedFrequency=this.indicator['frequency'];

      //checking if calculation method is set for this indicator
      if(this.indicator['calculation_method']!=null){
        this.indicatorCalculationMethodIsset=true;
        this.editForm.get('indicatorCalcualtionMethod').setValue(this.indicator['calculation_method']['calculation_method_id']);
        this.calculationHttp.show(this.indicator['calculation_method']['calculation_method_id'])
        .subscribe(data=>{
          this.selectedindicatorCalculationMethod=data['data'];
        })
      }
      //end of checking calcualtion method of this indicator

      //checking if disaggregation is set for this indicator
      if(this.indicator['disaggregations']!=null){
        this.indicatorDisaggregationIsSet=true;
        this.editForm.get('disaggregation').setValue(this.indicator['disaggregations']['disaggregation_method_id']);
        this.isChecked=true;
        this.disaggregationHttp.show(this.indicator['disaggregations']['disaggregation_method_id'])
        .subscribe(data=>{
          this.selectedIndicatorDisaggregations=data['data'];
        });
       } 
       //end of checking disaggregation of this indicator


      

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

  typeSelected(type){

  }

  customFormDissagregationMethod(fields){
    console.log(fields);
  }

  showCustoForms(event){
    this.isCustomFormChecked=true;
     //finding list of custom forms
     this.customFormHttp.index()
     .subscribe(data=>{
      this.customForms=data['data'];
     });
     //end of finding custom forms

     //checking if this indicator is connected with custom forms
     this.indicatorFormHttp.show(this.data['indicator_id'])
     .subscribe(data=>{
       if(data['data'].length>0){
         this.isConnected=true;
        this.editForm.get('customForm').setValue(data['data'][0]['form_id']);
       }
     });
     //end of checking if this indicator is connected with custom forms

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
       if(this.indicatorCalculationMethodIsset){
        this.updateIndicatorDisaggregationMethod();
       }else{
         this.storeIndicatorCalculationMethod();
       }

       if(this.indicatorDisaggregationIsSet){
         this.updateIndicatorDisaggregationMethod();
       }else{
         this.storeIndicatorDisaggregationMethod();
       }
       
       if(this.isCustomFormChecked){
         if(this.indicatorFormData.length>0){
           this.updateIndicatorForm();
         }else if(!this.isConnected&&this.customForm.length>0){
           this.storeIndicatorForm();
         }else{
           this.storeIndicatorForm();
         }
       }
  }

  storeIndicatorCalculationMethod(){
    this.indicatorCalculationMethodHttp.store(this.data['indicator_id'],this.editForm.get('indicatorCalcualtionMethod').value)
    .subscribe(data=>{
      console.log(data);
    })
  }
  updateIndicatorCalculationMethod(){
    this.indicatorCalculationMethodHttp.update(this.data['indicator_id'],this.editForm.get('indicatorCalcualtionMethod').value)
    .subscribe(data=>{
      console.log(data);
    })  
  }

  storeIndicatorDisaggregationMethod(){
    this.indicatorDisaggregationHttp.store(this.data['indicator_id'],this.editForm.get('disaggregation').value)
    .subscribe(data=>{
      console.log(data);
    })
  }
  updateIndicatorDisaggregationMethod(){
    this.indicatorDisaggregationHttp.update(this.data['indicator_id'],this.editForm.get('disaggregation').value)
    .subscribe(data=>{
      console.log(data);
    })
  }

  storeIndicatorForm(){
    this.indicatorFormHttp.store(this.data['indicator_id'],this.editForm.get('customForm').value)
        .subscribe(data=>{
          if(data['data']){
            this.dialogRef.close();
          }
        });
  }

  updateIndicatorForm(){
    this.indicatorFormHttp.update(this.data['indicator_id'],this.editForm.get('customForm').value)
        .subscribe(data=>{
          if(data['data']){
            this.dialogRef.close();
          }
        });
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
