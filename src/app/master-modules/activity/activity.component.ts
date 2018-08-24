import { Component, OnInit } from '@angular/core';
import {Activity} from '../../models/activity';
import {AppService} from '../../services/app.service';
import {apiRoutes} from '../../app.constants';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: Array<Activity> = [];
  constructor(private app: AppService) {
      this.index();
  }

  ngOnInit() {

  }
  index () {
    /* this.app.get(apiRoutes.activity.index).subscribe((data: Array<Activity>) => {
      this.activities = data;
    }); */
  }
  updateActivites(results: Activity[]) {
    this.activities = results;
  }

}
