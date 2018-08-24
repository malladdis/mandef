import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';
import {MatDialog, MatExpansionPanel} from '@angular/material';
import {OutputDialogComponent} from '../../output-dialog/output-dialog.component';
import {ActivityDialogComponent} from '../../activity-dialog/activity-dialog.component';

@Component({
  selector: 'app-activity-tree',
  templateUrl: './activity-tree.component.html',
  styleUrls: ['./activity-tree.component.scss']
})
export class ActivityTreeComponent implements OnInit {
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
