import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-outcome-dialog',
  templateUrl: './outcome-dialog.component.html',
  styleUrls: ['./outcome-dialog.component.scss']
})
export class OutcomeDialogComponent implements OnInit {

  timePlans: Array<Object>;
  tabs = ['Outcome', 'Output', 'Indicator'];
  comps = [''];
  disaggregate = false;
  customform = false;
  dataTypes: Array<Object>;
  frequencies: Array<Object>;
  measuringUnits: Array<Object>;
  disaggregationMethods: Array<Object>;
  constructor(public dialogRef: MatDialogRef<OutcomeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private projectservice: ProjectService) { }

  ngOnInit() {
    this.getTimePlans();
    this.getDataTypes();
    this.getFrequencies();
    this.getMeasuringUnit();
    this.getDisaggregationMethods();
  }

  getTimePlans() {
    this.projectservice.getTimePlans().subscribe(data => {
      this.timePlans = data['data'];
    });
  }
  getDataTypes() {
    this.projectservice.getDatatypes().subscribe(data => {
      this.dataTypes = data['data'];
    });
  }

  getFrequencies() {
    this.projectservice.getFrequencies().subscribe(data => {
      this.frequencies = data['data'];
    });
  }

  getMeasuringUnit() {
    this.projectservice.getMeasuringUnits().subscribe(data => {
      this.measuringUnits = data['data'];
    });
  }
  getDisaggregationMethods() {
    this.projectservice.getDisaggregationMethods().subscribe(data => {
      this.disaggregationMethods = data['data'];
    });
  }
  submit(form) {
    this.projectservice.addOutcome(form, this.data).subscribe(data => {
      console.log(data);
      form.resetForm();
    });
  }
  submitOutput(form) {
    this.projectservice.addOutput(form, this.data).subscribe(data => form.resetForm());
    console.log(form);
  }
  submitIndicator(form) {
    this.projectservice.addIndicator(form, this.data);
    console.log(form);
  }
}
