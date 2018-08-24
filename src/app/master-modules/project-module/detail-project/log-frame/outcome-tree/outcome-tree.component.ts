import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';
import {MatDialog, MatExpansionPanel} from '@angular/material';
import {OutcomeDialogComponent} from '../../outcome-dialog/outcome-dialog.component';

@Component({
  selector: 'app-outcome-tree',
  templateUrl: './outcome-tree.component.html',
  styleUrls: ['./outcome-tree.component.scss'],
})
export class OutcomeTreeComponent implements OnInit {
  @Input() id;
  @Input() project_id;
  outcome: any;
  icon: string;
  constructor(private projectservice: ProjectService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.icon = 'chevron_right';
    this.getOutcomes(this.id);
  }

  getOutcomes(id) {
    this.projectservice.getOutcomes(id).subscribe(data => {
      this.outcome = data['data'];
      console.log(data);
    });
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
      {data: {'project_id': this.project_id, 'type': 'outcome', 'id': id},
        minWidth: '500px', minHeight: '400px', maxHeight: '600px' , disableClose: true});
  }
}
