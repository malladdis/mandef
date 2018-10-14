import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: Array<Object>;
  project_id: number;
  activity_id: number;
  constructor(private projectservice: ProjectService,
              private router: Router,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.getActivities();
    this.project_id = this.route['_futureSnapshot']['params']['id'];
    this.route.params.subscribe(params => {
      this.activity_id = +params['id'];
    });
  }

  getActivities() {
    this.projectservice.getActivities().subscribe(data => {
      this.activities = data['data'];
    });
  }

}
