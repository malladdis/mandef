import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../project.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {
  project_id: number;
  activity_id: number;
  activity: Array<Object>;
  constructor(private route: ActivatedRoute,
              private projectservice: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activity_id = +params['activity_id'];
      this.project_id = +params['id'];
      this.getActivity(+params['activity_id']);
    });
  }
  getActivity(id) {
    this.projectservice.getActivity(id).subscribe(data => {
      this.activity = data['data'];
    });
  }
}
