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


@Component({
  selector: 'app-data-entry-dialog',
  templateUrl: './data-entry-dialog.component.html',
  styleUrls: ['./data-entry-dialog.component.scss']
})
export class DataEntryDialogComponent implements OnInit {
  indicator_id:number;
  indicatorForm:Array<IndicatorForm>=[];
  disaggregationMethod:string;
  calculationMethod:string;
  indicators:Array<any>=[];
  grandTotal:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<DataEntryDialogComponent>,private indicatoFormHttp:IndicatorFormService,
  private indicatorDisaggregationHttp:IndicatorDisaggregationService,private indicatorCalculationMethodHttp:IndicatorCalculationmethodService,
  private calculator:CalculatorService,private measuringUnitHttp:MeasuringUnitService,private indicatorHttp:IndicatorService) { }

  ngOnInit() {
    this.indicator_id=this.data['indicator_id'];

    this.indicatorHttp.show(this.indicator_id)
    .subscribe(data=>{
      this.indicators=data['data'];

      this.measuringUnitHttp.show(this.indicators[0]['measuring_unit_id'])
      .subscribe(data=>{
        console.log(data['data']);
      });
    })
    this.indicatoFormHttp.show(this.indicator_id)
    .subscribe(data=>{

     this.indicatorForm=data['data'];

     

     this.indicatorDisaggregationHttp.show(this.indicator_id)
    .subscribe(data=>{
      this.disaggregationMethod=data['data'][0]['name'];
    });

    this.indicatorCalculationMethodHttp.show(this.indicator_id)
    .subscribe(data=>{
      this.calculationMethod=data['data'][0]['name'];
    });
     

    });
  }

}
