import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../project.service';
import {ToasterNotificationService} from '../../../../services/toaster-notification.service';
import {MatDialog} from '@angular/material';
import {AddExpenditureComponent} from './add-expenditure/add-expenditure.component';
import {AddExpenditureCategoryComponent} from './add-expenditure-category/add-expenditure-category.component';
import {FinancialReportComponent} from './financial-report/financial-report.component';
import {populateColumns} from './helper';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss'],
})
export class ExpenditureComponent implements OnInit {
  id;
  finance_plan_id: number;
  project_id: number;
  categories = [];
  start;
  end;
  finance;
  finance_index;
  columns = [];
  enable = false;
  finance_plan;
  params;
  formsInputs = {};
  expenses;
  expenditures;
  totalFormValue: number;
  @ViewChild('monthlyExpenditure') monthlyExpenditure;

  constructor(private route: ActivatedRoute,
              private projectserivce: ProjectService,
              private toaseter: ToasterNotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(params);
      this.finance_plan_id = Number(+params['finance_plan_id'].split('_')[0]);
      this.params = +params['finance_plan_id'];
      this.getProject(+params['finance_plan_id'].split('_')[1]);
      this.project_id = Number(+params['finance_plan_id'].split('_')[1]);
      this.finance_index = Number(+params['finance_plan_id'].split('_')[2]);
    });
    this.getMonthlyExpenditureByFinancePlan();
  }

  getFormInputs() {
    let j = '{';
    for (const category of this.categories) {
      for (const exp of this.expenditures[category]) {
        if (exp) {
          for (let i = 1; i < this.columns.length; i++) {
            if (this.columns[i] !== ' ') {
              const value = JSON.parse(exp['values']);
              const setV = this.columns[i] !== 'Total' ? value[this.columns[i]] : this.sumTotal(exp['exp_id']);
              j += `"${exp['exp_id']}_${this.columns[i]}": "${setV}",`;
            }
          }
        }
      }
    }
    j = j.substring(0, j.lastIndexOf(',')) + '}';
    return j;
  }
  getValues() {
    let values = '{';
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i] !== ' ') {
        values += `"${this.columns[i]}": "${0}",`;
      }
    }
    values = values.substring(0, values.lastIndexOf(',')) + '}';
    return values;
  }
  getProject(id) {
    this.projectserivce.show(id).subscribe(data => {
      this.start = data['data']['details']['starting_date'];
      this.end = data['data']['details']['ending_date'];
      this.getFinanceByProject(data['data']['id']);
      // console.log(this.months[Number(this.start.split('-')[1]) - 1]);
    });
  }

  getFinanceByProject(id) {
    this.projectserivce.getFinanceByProject(id).subscribe(data => {
      this.finance = data['data'];
      console.log(data['data']);
      this.getFinancePlan(data['data']);
      this.columns = populateColumns(data['data']['plans'][this.finance_index]['name'], this.finance_plan['start']);
      if (this.getFormInputs().length > 4) {
        this.formsInputs = JSON.parse(this.getFormInputs());
      }

    });
  }

  getMonthlyExpenditureByFinancePlan() {
    this.projectserivce.getMonthlyExpenditureByFinancePlan(this.finance_plan_id).subscribe(data => {
      this.expenses = data['data'];
      console.log(data);
    });
  }


  getFinancePlan(finance) {
    this.finance_plan = finance['plans'][this.finance_index];
    for (const exp in this.finance_plan['expenditures']) {
      if (exp) {
        this.categories.push(exp);
      }
    }
    this.expenditures = this.finance_plan['expenditures'];
    console.log(finance['plans']);
  }

  setEnable(b) {
    this.enable = b;
  }

  prepareFormData(form) {
    const data = [];
    this.totalFormValue = 0;
    for (const category of this.categories) {
      for (const exp of this.expenditures[category]) {
        if (exp) {
          let values = '{';
          for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i] !== ' ' && this.columns[i] !== 'Total') {
              const value = form.value[exp['exp_id'] + '_' + this.columns[i]]
              !== undefined ? Number(form.value[exp['exp_id'] + '_' + this.columns[i]]) : 0;
              values += `"${this.columns[i]}": "${value}",`;
              this.totalFormValue += Number(value);
            }
          }
          values = values.substring(0, values.lastIndexOf(',')) + '}';
          data.push({
            finance_plan_id: this.finance_plan_id,
            expenditure_id: exp['exp_id'],
            values: values
          });
        }
      }
    }
    return data;
  }

  openExpenditureDialog() {
    this.dialog.open(AddExpenditureComponent,
      {data: {'project_id': this.project_id, 'finance_plan_id': this.finance_plan_id, 'values': this.getValues()},
        minWidth: '500px', minHeight: '400px', maxHeight: '600px', disableClose: true});
  }

  openExpenditureCategoryDialog() {
    this.dialog.open(AddExpenditureCategoryComponent,
      {data: {'project_id': this.project_id},
        minWidth: '500px', minHeight: '350px', maxHeight: '600px', disableClose: true});
  }
  opendReportDialog() {
    this.dialog.open(FinancialReportComponent,
      {data: {'project_id': this.project_id, 'plans': this.finance},
        width: '1000px', minHeight: '350px', maxHeight: '100vh', disableClose: true});
  }
  sumTotal(id) {
    let sum = 0;
    for (let i = 1; i < this.columns.length - 1; i++) {
      sum += Number(this.formsInputs[`${id}_${this.columns[i]}`]);
    }
    this.formsInputs[`${id}_Total`] = sum;
    if (isNaN(sum)) {
      return 0;
    }
    return sum;
  }

  submit() {
    const formData =  this.prepareFormData(this.monthlyExpenditure);
    console.log(formData);
    if (this.finance_plan['value'] >= this.totalFormValue) {
      this.projectserivce.addmonthlyExpenditure(
       formData
      )
        .subscribe(data => {this.toaseter.success('success', data['message']); this.setEnable(false); }
        );
    } else {
      console.log(this.totalFormValue);
      this.toaseter.warning('unable to save', 'please update the plan or enter less amount before you continue');
    }
  }
}
