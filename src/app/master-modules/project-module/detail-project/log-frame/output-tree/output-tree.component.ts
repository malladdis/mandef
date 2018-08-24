import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';
import {MatDialog, MatExpansionPanel} from '@angular/material';
import {OutcomeDialogComponent} from '../../outcome-dialog/outcome-dialog.component';
import {OutputDialogComponent} from '../../output-dialog/output-dialog.component';

@Component({
  selector: 'app-output-tree',
  templateUrl: './output-tree.component.html',
  styleUrls: ['./output-tree.component.scss']
})
export class OutputTreeComponent implements OnInit {
  icon: string;
  @Input() id;
  @Input() outcome_id;
  output: any;
  constructor(private projectservice: ProjectService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.icon = 'chevron_right';
    this.getOutputs(this.id);
  }
  getOutputs(id) {
    this.projectservice.getOutputs(id).subscribe(data => {
      this.output = data['data'];
    });
  }
  disable(panel: MatExpansionPanel) {
    panel.toggle();
    this.toggleIcon();
    this.openOutputDialog();
  }
  toggleIcon() {
    this.icon = this.icon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }
  openOutputDialog() {
    this.dialog.open(OutputDialogComponent,
      {data: {'outcome_id': this.outcome_id, 'type': 'output', 'id': this.id, 'output_id': this.id },
        minWidth: '500px', minHeight: '400px', maxHeight: '600px', disableClose: true});
  }
}
