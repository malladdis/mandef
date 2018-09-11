import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../project.service';
import * as moment from 'moment';
import {MatDialog} from '@angular/material';
import {AddFinanceDialogComponent} from './add-finance-dialog/add-finance-dialog.component';

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
      this.getFinanceByProject(+params['id']);
      this.getProject(+params['id']);
      this.project_id = +params['id'];
    });
  }

  getProject(id) {
    this.projectService.show(id).subscribe(data => {
      this.project = data['data'];
      this.budget = data['data']['details']['budget'];
      this.start = data['data']['details']['starting_date']; this.end = data['data']['details']['ending_date'];
      this.calclulateDate(this.start, this.end);
    });
  }

  getFinanceByProject(project_id) {
    this.projectService.getFinanceByProject(project_id).subscribe(data => {
      this.finance = data['data'];
      this.preparePlans(data['data']['plans']);
      this.len = this.finance.length;
    });
  }

  calclulateDate(start, end) {
    const duration = moment.duration(moment(end).diff(moment(start)));
    console.log(Math.round(duration.asYears()));
    console.log(moment(end).quarters());
  }

  changeName(frequency) {
    if (frequency.startsWith('Annual')) {
      return 'year';
    }
    if (frequency.startsWith('Biannual')) {
      return 'half year';
    }
    if (frequency.startsWith('Quarterly')) {
      return 'quarter';
    }
    return frequency;
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

  preparePlans(plans) {
    for (const plan in plans) { plans[plan]['name'] = `${this.changeNumber(Number(plans[plan]['name']
      .charAt(plans[plan]['name'].length - 1)))} ${this.changeName(plans[plan]['name'])}`;
    }
    this.financePlans = plans;
  }

  addFinancePlan() {
    this.dialog.open(AddFinanceDialogComponent, {
      data: {'project_id': this.project_id, 'start': this.start, 'end': this.end, 'budget': this.budget},
      minWidth: '500px', minHeight: '100vh', maxHeight: '600px', disableClose: true
    });
  }
  navigateToExpenditure(finance_plan_id) {
    this.router.navigate([`/auth/master-modules/project/detail/${this.project_id}/expenditure/${finance_plan_id}_${this.project_id}`]);
  }
}
