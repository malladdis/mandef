import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../project.service';
import {API_URL_File, apiRoutes} from '../../../../../app.constants';
import {TokenService} from '../../../../../services/token.service';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';
import {AddMilestoneComponent} from '../work-plan/add-milestone/add-milestone.component';
import {forEach} from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {
  project_id: number;
  activity_id: number;
  activity: Array<Object>;
  uploadURL;
  columns = ['No', 'Name', 'Tag', 'Date', 'User', ' '];
  files: Array<Object>;
  plans;
  constructor(private route: ActivatedRoute,
              private projectservice: ProjectService,
              private tokenService: TokenService,
              private location: Location,
              private matdialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activity_id = +params['activity_id'];
      this.uploadURL = `${apiRoutes.files.store}?token=${this.tokenService.get()}&is_activity_file=${1}&parent_id=${this.activity_id}`  ;
      this.project_id = +params['id'];
      this.getActivity(+params['activity_id']);
    });
  }
  getActivity(id) {
    this.projectservice.getActivity(id).subscribe(data => {
      this.activity = data['data'];
      this.files = data['data']['files'];
      console.log(data['data']['files']);
      this.plans = this.generateDataForWorkPlan(data['data']);
      console.log(this.plans);
    });
  }
  browse(input) {
    input.click();
  }
  downloadFile(path) {
    // location.replace((`${API_URL_File}${path}`));
    // location.replace();
    // console.log(`${API_URL_File}${path}`);
    window.open(`${API_URL_File}${path}`, '_blank');
  }
  opendAddMilestoneDialog() {
    this.matdialog.open(AddMilestoneComponent, {data: {'activity_id': this.activity_id}, disableClose: true});
  }
  generateDataForWorkPlan(activity) {
    const plan = {
      id: activity['id'],
      name: activity['name'],
      start: activity['start_date'],
      end: activity['end_date'],
      tasks: []
    };
    activity['milestones'].forEach(milestone => {
      plan.tasks.push({
        id: milestone['id'],
        name: milestone['name'],
        start: new Date(milestone['start']),
        end: new Date(milestone['end']),
        percentComplete: milestone['percentComplete'],
        status: milestone['percentComplete'] === 1 ? 'Completed' : 'In progress',
        target: milestone['target'],
        actual: milestone['actual'],
        budget: milestone['budget']
      });
    });
    return plan;
  }
}
