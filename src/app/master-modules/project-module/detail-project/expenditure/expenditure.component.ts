import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../project.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {and} from '@angular/router/src/utils/collection';
import {ToasterNotificationService} from '../../../../services/toaster-notification.service';
import {MatDialog} from '@angular/material';
import {OutcomeDialogComponent} from '../outcome-dialog/outcome-dialog.component';
import {AddExpenditureComponent} from './add-expenditure/add-expenditure.component';
import {AddExpenditureCategoryComponent} from './add-expenditure-category/add-expenditure-category.component';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('void', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('*', style({height: '*', visibility: 'visible'})),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpenditureComponent implements OnInit {
  id;
  finance_plan_id: number;
  project_id: number;
  categories = [];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    this.getExpenditureCategories();
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

  getExpenditureCategories() {
    this.projectserivce.getExpenditureCategories().subscribe(data => {
      // this.categories = data['data'];
      console.log(data);
    });
  }

  getProject(id) {
    this.projectserivce.show(id).subscribe(data => {
      this.start = data['data']['details']['starting_date'];
      this.end = data['data']['details']['ending_date'];
      this.getFinanceByProject(data['data']['id']);
      console.log(this.months[Number(this.start.split('-')[1]) - 1]);
    });
  }

  getFinanceByProject(id) {
    this.projectserivce.getFinanceByProject(id).subscribe(data => {
      this.finance = data['data'];
      console.log(data['data']);
      this.getFinancePlan(data['data']);
      this.populateColumns(data['data']['plans'][this.finance_index]['name'], Number(this.start.split('-')[1]) - 1);
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

  getEndingMonthByAnnual(start) {
    if (Math.abs((start - 11)) > 10) {
      return Math.abs((start - 11));
    } else {
      return (start - 11) + 10;
    }
  }

  getEndingMonthBiAnnual(start) {
    if ((start + 5) <= 11) {
      return (start + 5);
    } else {
      return (start + 5) - this.months.length;
    }
  }

  populateColumns(plan, start) {
    if (plan.startsWith('Annual')) {
      this.columns = this.getColumns(start, this.getEndingMonthByAnnual(start));
    }
    if (plan.startsWith('Biannual')) {
      this.columns = this.getColumns(start, this.getEndingMonthBiAnnual(start));
    }
  }

  getColumns(start, end) {
    const column = [' '];
    if (end > start) {
      for (let i = start; i <= end; i++) {
        column.push(this.months[i]);
      }
      return column;
    } else {
      for (let i = start; i < this.months.length; i++) {
        column.push(this.months[i]);
      }
      for (let i = 0; i <= end; i++) {
        column.push(this.months[i]);
      }
      column.push('Total');
      return column;
    }
  }

  getFinancePlan(finance) {
    this.finance_plan = finance['plans'][this.finance_index];
    for (const exp in this.finance_plan['expenditures']) {
      if (exp) {
        this.categories.push(exp);
      }
    }
    this.expenditures = this.finance_plan['expenditures'];
  }

  setEnable(b) {
    this.enable = b;
  }

  prepareFormData(form) {
    const data = [];
    for (const category of this.categories) {
      for (const exp of this.expenditures[category]) {
        if (exp) {
          let values = '{';
          for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i] !== ' ' && this.columns[i] !== 'Total') {
              const value = form.value[exp['exp_id'] + '_' + this.columns[i]]
              !== undefined ? Number(form.value[exp['exp_id'] + '_' + this.columns[i]]) : 0;
              values += `"${this.columns[i]}": "${value}",`;
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
      {data: {'project_id': this.project_id}, minWidth: '500px', minHeight: '400px', maxHeight: '600px', disableClose: true});
  }

  openExpenditureCategoryDialog() {
    this.dialog.open(AddExpenditureCategoryComponent,
      {data: {'project_id': this.project_id}, minWidth: '500px', minHeight: '350px', maxHeight: '600px', disableClose: true});
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
    this.projectserivce.addmonthlyExpenditure(
      this.prepareFormData(this.monthlyExpenditure)
    )
      .subscribe(data => this.toaseter.success('success', data['message'])
      );
    console.log(this.formsInputs);
  }
}
