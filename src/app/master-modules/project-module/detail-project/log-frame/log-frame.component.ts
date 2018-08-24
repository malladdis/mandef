import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../project.service';
import {MatDialog, MatExpansionPanel, MatExpansionPanelState} from '@angular/material';
import {OutcomeDialogComponent} from '../outcome-dialog/outcome-dialog.component';

@Component({
  selector: 'app-log-frame',
  templateUrl: './log-frame.component.html',
  styleUrls: ['./log-frame.component.scss']
})
export class LogFrameComponent implements OnInit {

  project: any;
  step = 0;
  icon: string;
  expand = true;
  formSubmited = false;
  constructor(private route: ActivatedRoute,
              private projectserivce: ProjectService,
              private dialog: MatDialog) {
    this.dialog.afterAllClosed.subscribe(v => {
      this.init();
    });

  }
  ngOnInit() {
  this.init();
  }
  init() {
    this.route.params.subscribe(params => {
      this.projectserivce.show(+params['id']).subscribe(data => {
        this.project = data['data'];
        console.log(data['data']);
      });
    });
    this.icon = 'expand_more';
  }
  disable(panel: MatExpansionPanel, id) {
    panel.toggle();
    this.toggleIcon();
    this.openOutcomeForm(id);
  }

  toggleIcon() {
    this.icon = this.icon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }
  openOutcomeForm(id) {
    this.dialog.open(OutcomeDialogComponent,
      {data: {'project_id': id, 'type': 'project', 'id': 0},
        width: '500px', height: '400px', disableClose: true});
  }
}
