import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input()
  activities: any;
  @Input()
  project_id;
  displayedColumns: string[] = ['Activity', 'Start Date', 'End Date', 'Status' , 'Output', 'Location', 'Category', ' '];
  constructor(
    private projectservice: ProjectService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  detailActivity(id) {
    this.router.navigate([`/auth/master-modules/project/detail/${this.project_id}/activity-detail/${id}`]);
  }
  toggleFavorite(activity) {
    activity.featured = !activity.featured;
    this.projectservice.updateActivity(activity).subscribe(res => console.log(res));
  }
}
