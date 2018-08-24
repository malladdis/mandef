import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../project.service';
import {OverviewComponent} from './overview/overview.component';
import {MatDialog} from '@angular/material';
import {OutcomeDialogComponent} from './outcome-dialog/outcome-dialog.component';
import {OutputDialogComponent} from './output-dialog/output-dialog.component';
import {IndicatorDialogComponent} from './indicator-dialog/indicator-dialog.component';
import {ActivityDialogComponent} from './activity-dialog/activity-dialog.component';
import {InputDialogComponent} from './input-dialog/input-dialog.component';
import {ChooserDialogComponent} from './chooser-dialog/chooser-dialog.component';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {
  id: number;
  pro: any;
  title: string;
  overviewLink: string;
  activityLink: string;
  logframLink: string;
  expenditureLink: string;
  constructor(private route: ActivatedRoute,
              private projectserivce: ProjectService,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.projectserivce.show(+params['id']).subscribe(data => {
        this.pro = data['data'];
        this.title = data['data']['title'];
        console.log(data['data']);
        this.overviewLink = `/auth/master-modules/project/detail/${data['data']['id']}/overview/${data['data']['id']}`;
        this.activityLink = `/auth/master-modules/project/detail/${data['data']['id']}/activities/${data['data']['id']}`;
        this.logframLink = `/auth/master-modules/project/detail/${data['data']['id']}/logframe/${data['data']['id']}`;
        this.expenditureLink = `/auth/master-modules/project/detail/${data['data']['id']}/expenditure/${data['data']['id']}`;
      });
    });
  }
  openOutcomeForm() {
    this.dialog.open(ChooserDialogComponent, {data: {'id': 1}, width: '500px', height: '450px', disableClose: false});
  }
  openOutputForm() {
    this.dialog.open(OutputDialogComponent, {width: '500px', height: '450px', disableClose: false});
  }
  openIndicatorForm() {
    this.dialog.open(IndicatorDialogComponent,{width: '500px', height: '450px', disableClose: false});
  }
  openActivityForm() {
    this.dialog.open(ActivityDialogComponent,{width: '500px', height: '450px', disableClose: false});
  }
  openInputForm() {
    this.dialog.open(InputDialogComponent,{width: '500px', height: '450px', disableClose: false});
  }

}

