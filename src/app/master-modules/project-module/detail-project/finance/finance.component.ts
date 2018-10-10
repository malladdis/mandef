import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../project.service';
import * as moment from 'moment';
import {MatDialog} from '@angular/material';
import {AddFinanceDialogComponent} from './add-finance-dialog/add-finance-dialog.component';
import {Moment, months} from 'moment';
import {changeName, changeNumber, getEndingMonthBiAnnual, getEndingMonthByAnnual, MONTH} from '../expenditure/helper';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  finance: any;
  financePlans: Array<Object>;
  len = 0;
  project: any;
  project_id: number;
  budget: number;
  start: string;
  end: string;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProject(+params['id']);
      this.project_id = +params['id'];
    });
  }

  getProject(id) {
    this.projectService.show(id).subscribe(data => {
      this.project = data['data'];
      this.budget = data['data']['details']['budget'];
      this.start = data['data']['details']['starting_date'];
      this.end = data['data']['details']['ending_date'];
      this.getFinanceByProject(data['data']['id']);
    });
  }

  getFinanceByProject(project_id) {
    this.projectService.getFinanceByProject(project_id).subscribe(data => {
      this.finance = data['data'];
      this.preparePlans(data['data']['plans']);
      this.len = this.finance.length;
    });
  }



  preparePlans(plans) {
    for (const plan in plans) {
      plans[plan]['name'] = `${changeNumber(Number(plans[plan]['name']
        .charAt(plans[plan]['name'].length - 1)))} ${changeName(plans[plan]['name'])}`;
    }
    this.financePlans = plans;
    localStorage.setItem('plans', JSON.stringify(plans));
  }

  addFinancePlan() {
    this.dialog.open(AddFinanceDialogComponent, {
      data: {'project_id': this.project_id, 'start': this.start, 'end': this.end, 'budget': this.budget},
      minWidth: '500px', minHeight: '100vh', maxHeight: '600px', disableClose: true
    });
  }

  navigateToExpenditure(finance_plan_id, i) {
    this.router.navigate([`/auth/master-modules/project/detail/${this.project_id}/expenditure/${finance_plan_id}_${this.project_id}_${i}`]);
  }
}
