import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-output-dialog',
  templateUrl: './output-dialog.component.html',
  styleUrls: ['./output-dialog.component.scss']
})
export class OutputDialogComponent implements OnInit {
  timePlans: Array<Object>;
  disaggregate = false;
  customform = false;
  dataTypes: Array<Object>;
  frequencies: Array<Object>;
  measuringUnits: Array<Object>;
  disaggregationMethods: Array<Object>;
  onbudget = false;
  activityCategories: Array<Object>;
  implementers: Array<Object>;
  kebeles: Array<Object>;
  statuses: Array<Object>;
  constructor(public dialogRef: MatDialogRef<OutputDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private projectservice: ProjectService) { }

  ngOnInit() {
    this.getTimePlans();
    this.getDataTypes();
    this.getFrequencies();
    this.getMeasuringUnit();
    this.getDisaggregationMethods();
    this.getActivityCategory();
    this.getImplementerPartners();
    this.getKebeles();
    this.getStatus();
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
  getActivityCategory() {
    this.projectservice.getActivityCategory().subscribe(data => {
      this.activityCategories = data['data'];
    });
  }
  getImplementerPartners() {
    this.projectservice.getImplementers().subscribe(data => {
      this.implementers = data['data'];
    });
  }
  getKebeles() {
    this.projectservice.getKebele().subscribe(data => {
      this.kebeles = data['data'];
    });
  }
  getStatus() {
    this.projectservice.getStatuses().subscribe(data => {
      this.statuses = data['data'];
    });
  }
  submitOutput(form) {
    this.projectservice.addOutput(form, this.data).subscribe(data => form.resetForm());
    console.log(form);
  }

  submitActivity(form) {
    this.projectservice.addActivity(form, this.data);
  }

  submitIndicator(form) {
    this.projectservice.addIndicator(form, this.data);
    console.log(form);
  }
}
