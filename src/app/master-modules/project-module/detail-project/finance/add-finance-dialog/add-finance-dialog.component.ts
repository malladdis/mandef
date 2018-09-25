import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ProjectService} from '../../../project.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-add-finance-dialog',
  templateUrl: './add-finance-dialog.component.html',
  styleUrls: ['./add-finance-dialog.component.scss']
})
export class AddFinanceDialogComponent implements OnInit {
  frequencySelect =  new FormControl('');
  frequencies: Array<Object>;
  financeInputs = [];
  year: number;
  frequency_id: number;
  @ViewChild('financeForm') finance;
  constructor(private projectService: ProjectService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.calclulateDate(data['start'], data['end']);
    this.frequencySelect.valueChanges.subscribe(res => {
      this.frequency_id = res.split('_')[1];
      if (res.split('_')[0] === 'Biannual') {
        this.createForm(this.year * 2, res);
        console.log(this.year * 2);
      }
      if (res.split('_')[0] === 'Quarterly') {
        this.createForm(this.year * 4, res);
      }
      if (res.split('_')[0] === 'Annual') {
        this.createForm(this.year, res);
       // this.finance.form.valueChanges.subscribe(respo => console.log(respo));
      }
    });
  }

  ngOnInit() {
    this.getFrequencies();
  }
  calclulateDate(start, end) {
    const duration = moment.duration(moment(end).diff(moment(start)));
    this.year = Math.round(duration.asYears());
  }
  getFrequencies() {
    this.projectService.getFrequencies().subscribe(data => {
      this.frequencies = data['data'];
    });
  }
  createForm(n, frequency) {
    this.financeInputs = [];
    this.changeName(frequency);
    for (let i = 0; i < n; i++) {
      this.financeInputs.push({
        name: `${frequency.split('_')[0]}${i + 1}`,
        title: `${this.changeNumber(i + 1)} ${this.changeName(frequency)} finance budget`
      });
    }
    console.log(this.financeInputs);
  }
  changeName(frequency) {
    if (frequency.split('_')[0] === 'Annual') {
      return 'year';
    }
    if (frequency.split('_')[0] === 'Biannual') {
      return 'half year';
    }
    if (frequency.split('_')[0] === 'Quarterly') {
      return 'quarter';
    } else {
      return frequency.split('_')[0];
    }
  }
  changeNumber(n) {
    if (n === 1) {
      return n + 'st';
    }
    if (n === 2) {
      return n + 'nd';
    }
    if (n === 3) {
      return n + 'rd';
    } else {
      return n + 'th';
    }
  }
  prepareFormData(form) {
    const plans = [];
    for (const input in form.value) {
      if (form.value) {
        plans.push({
          name: input,
          value: form.value[input]
        });
      }
    }
    return plans;
  }
  submit(form) {
    this.projectService.addFinance(this.data['project_id'], this.frequency_id, this.prepareFormData(form), form);
  }
}
