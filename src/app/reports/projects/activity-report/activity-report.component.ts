import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../master-modules/project-module/project.service';
import { MatDialog, MatExpansionPanel } from '@angular/material';
import { ActivityDialogComponent } from '../../../master-modules/project-module/detail-project/activity-dialog/activity-dialog.component';

@Component({
  selector: 'app-activity-report',
  templateUrl: './activity-report.component.html',
  styleUrls: ['./activity-report.component.scss']
})
export class ActivityReportComponent implements OnInit {
  @Input() id;
  @Input() output_id;
  activity: any;
  icon: string;
  constructor(private projectservice: ProjectService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.icon = 'chevron_right';
    this.getActivity();
  }
  disable(panel: MatExpansionPanel) {
    panel.toggle();
    this.toggleIcon();
    this.openActivityForm();
  }
  toggleIcon() {
    this.icon = this.icon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }
  getActivity() {
    this.projectservice.getActivity(this.id).subscribe(data => {
      this.activity = data['data'];
      console.log(data);
    });
  }
  openActivityForm() {
    this.dialog.open(ActivityDialogComponent,
      {data: {'type': 'activity', 'id': this.id, 'output_id': this.output_id },
        minWidth: '500px', minHeight: '400px', maxHeight: '600px', disableClose: true});
  }
}