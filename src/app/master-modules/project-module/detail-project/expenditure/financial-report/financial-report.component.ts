import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FinanceReportService} from './finance-report.service';
import {ExcelService} from './excel.service';


// import * as XLSX from 'xlsx';
export interface Plans {
  id: number;
  name: string;
  expenditure: any;
}

export interface ExpenditureCategory {
  id: number;
  name: string;
  plans: any;
  overall: number;
}

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.scss']
})
export class FinancialReportComponent implements OnInit {
  financialReportForm: FormGroup;
  plans: Array<Object>;
  planSet = new Set();
  datas;
  categories = new Set();
  expenditureCategories = new Set();
  plan = new Set();
  expenditures = new Set();
  reportData = new Set();
  columns = [];
  show = false;
  isGenerate = true;
  @ViewChild('financialTable') myTable: ElementRef;

  constructor(private financialReportSerive: FinanceReportService,
              private formbuilder: FormBuilder,
              private excelService: ExcelService) {
  }

  ngOnInit() {
    this.getPlans();
    this.createForm();
  }

  createForm() {
    this.financialReportForm = this.formbuilder.group({
      format: 'xslx',
      plan: ''
    });
    this.financialReportForm.get('plan').valueChanges.subscribe(d => {
      this.isGenerate = true;
    });
  }

  getPlans() {
    this.plans = JSON.parse(localStorage.getItem('plans'));
  }

  getExpenditure(finance_plan_id, datas, category_id) {
    const exp = [];
    let overall = 0;
    const e = [];
    for (const data of datas) {
      for (const d of data) {
        if (d['finance_plan_id'] === finance_plan_id && d['category']['id'] === category_id) {
          exp.push({
            id: d['id'],
            name: d['name'],
            total: d['total']
          });
          overall += d['total'];
        }
      }
    }
    e.push(exp);
    e.push(overall);
    return e;
  }

  filterExpenditureByCategoy(datas): ExpenditureCategory[] {
    const c = [];

    this.categories.forEach((category) => {
      this.planSet.forEach((values) => {
        const d = this.getCategory(category, datas);
        const p = this.filterPlan(values, datas, d['id']);
        c.push({
          id: d['id'],
          name: d['name'],
          plans: p[0],
          overall: p[1]
        });
      });
    });
    return c;
  }

  getCategory(id, datas) {
    for (const data of datas) {
      // this.planSet.add(data['finance_plan_id']);
      console.log(data);
      for (const d of data) {
        if (d['category']['id'] === id) {
          return d['category'];
        }
      }
    }

  }

  filterPlan(id, datas, category_id) {
    let plan: Plans;
    const exp = this.getExpenditure(id, datas, category_id);
    const d = [];
    for (const p of this.plans) {
      if (p['id'] === id) {
        plan = {
          id: p['id'],
          name: p['name'],
          expenditure: exp[0]
        };
      }
    }
    d.push(plan);
    d.push(exp[1]);
    return d;
  }

  getPlan(datas) {
    console.log(datas);
    for (const data of datas) {
      // this.planSet.add(data['finance_plan_id']);
      console.log(data);
      for (const d of data) {
        this.planSet.add(d['finance_plan_id']);
        this.categories.add(d['category']['id']);
      }
    }
    this.datas = this.filterExpenditureByCategoy(datas);
    console.log(this.datas);
    this.filterExpedntirureCategory(this.datas);
  }

  filterExpedntirureCategory(data) {
    for (let i = 0; i < data.length; i++) {
      this.expenditureCategories.add(data[i]['name']);
      this.plan.add(data[i]['plans']['name']);
      // this.expenditures.add()[i]
      for (let j = 0; j < data[i]['plans']['expenditure'].length; j++) {
        this.expenditures.add(data[i]['plans']['expenditure'][j]['name']);
      }
    }
    console.log(this.expenditureCategories);
    console.log(this.plan);
    console.log(this.expenditures);
    const json_data = new Set();
    this.expenditureCategories.forEach(category => {
      const temp = {
        name: category,
        overall: 0,
        expenditures: []
      };
      for (let i = 0; i < data.length; i++) {
        if (data[i]['name'] === category) {
          temp.overall += data[i]['overall'];
        }
      }
      json_data.add(temp);
    });
    console.log(json_data);
    const exps = new Set();
    this.expenditures.forEach(exp => {
      const temp = {
        name: exp,
        plans: new Set(),
        category: ''
      };
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i]['plans']['expenditure'].length; j++) {
          console.log(data[i]['plans']['expenditure'][j]['name']);
          if (exp === data[i]['plans']['expenditure'][j]['name']) {
            temp.plans.add({
              name: data[i]['plans']['name'],
              total: data[i]['plans']['expenditure'][j]['total']
            });
            temp.category = data[i]['name'];
            console.log(exp);
          }
        }
      }
      exps.add(temp);
    });
    console.log(exps);

    exps.forEach(e => {
      const te = {
        name: e.name,
        plans: Array.from(e.plans),
        category: e.category
      };
      json_data.forEach(d => {
        if (e.category === d.name) {
          d.expenditures.push(te);
        }
      });
    });
    this.datas = Array.from(json_data);
    console.log(this.datas);
  }

  populateColumns() {
    const plans = new Set();
    for (const plan of this.financialReportForm.value.plan) {
      for (const p of this.plans) {
        if (p['id'] === plan) {
          plans.add(p['name']);
        }
      }
    }
    this.columns = [];
    this.columns.push(' ');
    this.columns.push('Expenditures');
    plans.forEach(plan => {
      this.columns.push(`${plan}`);
    });
    this.columns.push('Overall Budget');
  }

  exportToFile() {
    if (this.financialReportForm.value.format === 'xslx') {
      this.excelService.exportAsExcelFile(this.prepareDataForExport(this.datas), 'Financial Report');
    }
    // console.log(this.prepareDataForExport(this.datas));
    // const table = `<table>${this.myTable['_elementRef']['nativeElement']['innerHTML']}</table>`;
    // console.log(table);
    // this.excelService.tableToExcel(table);
  }

  prepareDataForExport(datas) {
    let exportData = '[';
    for (let i = 0; i < datas.length; i++) {
      let temp = '';
      for (let j = 0; j < datas[i]['expenditures'].length; j++) {
        let t = '';
        if (temp.includes(datas[i]['name'])) {
          t += `{"Category" : "",`;
        } else {
          t += `{"Category" : "${datas[i]['name']}",`;
        }
        t += `"Expenditures" : "${datas[i]['expenditures'][j]['name']}",`;
        for (let k = 0; k < datas[i]['expenditures'][j]['plans'].length; k++) {
          t += `"${datas[i]['expenditures'][j]['plans'][k]['name']}" : "${datas[i]['expenditures'][j]['plans'][k]['total']}",`;
        }
        if (temp.includes(datas[i]['overall'])) {
          t += `"Overall Expense" : " ",`;
        } else {
          t += `"Overall Expense" : "${datas[i]['overall']}",`;
        }
        t = t.substring(0, t.lastIndexOf(',')) + '},';
        temp += t;
      }
      exportData += temp;
    }
    exportData = exportData.substring(0, exportData.lastIndexOf(',')) + ']';
    return JSON.parse(exportData);
  }

  preparePlan() {
    let data = '{';
    for (let i = 0; i < this.financialReportForm.value.plan.length; i++) {
      data += `"${i}":"${this.financialReportForm.value.plan[i]}",`;
    }
    data = data.substring(0, data.lastIndexOf(',')) + '}';
    return data;
  }

  generate() {
    this.financialReportSerive.getFinanceReport(this.financialReportForm.value.plan).subscribe(data => {
      this.getPlan(data);
      this.isGenerate = false;
      console.log(data);
    });
    this.populateColumns();
    this.show = true;
    console.log(this.financialReportForm);
  }
}
