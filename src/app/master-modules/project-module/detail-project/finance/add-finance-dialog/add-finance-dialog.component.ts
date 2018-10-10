import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ProjectService} from '../../../project.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import * as moment from 'moment';
import {
  changeName,
  changeNumber,
  getEndingMonthBiAnnual,
  getEndingMonthByAnnual,
  getListOfStaringMonthIndexs
} from '../../expenditure/helper';

@Component({
  selector: 'app-add-finance-dialog',
  templateUrl: './add-finance-dialog.component.html',
  styleUrls: ['./add-finance-dialog.component.scss']
})
export class AddFinanceDialogComponent implements OnInit {
  frequencySelect = new FormControl('');
  frequencies: Array<Object>;
  financeInputs = [];
  year: number;
  frequency_id: number;
  monthIndexs = [];
  @ViewChild('financeForm') finance;

  constructor(private projectService: ProjectService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.calclulateDate(data['start'], data['end']);
    this.listenToFrequencyControl(data['start']);
  }

  ngOnInit() {
    this.getFrequencies();
  }

  listenToFrequencyControl(start) {
    this.frequencySelect.valueChanges.subscribe(res => {
      this.frequency_id = res.split('_')[1];
      if (res.split('_')[0] === 'Biannual') {
        this.createForm(this.year * 2, res);
        this.monthIndexs = getListOfStaringMonthIndexs(start, this.year * 2, res.split('_')[0]);
      }
      if (res.split('_')[0] === 'Quarterly') {
        this.createForm(this.year * 4, res);
        this.monthIndexs = getListOfStaringMonthIndexs(start, this.year * 4, res.split('_')[0]);
      }
      if (res.split('_')[0] === 'Annual') {
        this.createForm(this.year, res);
        this.monthIndexs = getListOfStaringMonthIndexs(start, this.year, res.split('_')[0]);
        // console.log(getListOfStaringMonthIndexs(start, this.year, res.split('_')[0]));
        // this.finance.form.valueChanges.subscribe(respo => console.log(respo));
      }
    });
  }

  calclulateDate(start, end) {
    this.year = Math.round(moment.duration(moment(end).diff(moment(start))).asYears());
  }

  getFrequencies() {
    this.projectService.getFrequencies().subscribe(data => {
      this.frequencies = data['data'];
    });
  }

  createForm(n, frequency) {
    this.financeInputs = [];
    for (let i = 0; i < n; i++) {
      this.financeInputs.push({
        name: `${frequency.split('_')[0]}${i + 1}`,
        title: `${changeNumber(i + 1)} ${changeName(frequency)} finance budget`
      });
    }
    console.log(this.financeInputs);
  }



  prepareFormData(form) {
    const plans = [];
    let i = 0;
    for (const input in form.value) {
      if (input && this.monthIndexs.length > 0) {
        plans.push({
          name: input,
          value: form.value[input],
          start: this.monthIndexs[i]
        });
      }
      i++;
    }
    return plans;
  }

  submit(form) {
    this.projectService.addFinance(this.data['project_id'], this.frequency_id, this.prepareFormData(form), form);
    console.log(this.prepareFormData(form));
  }
}
