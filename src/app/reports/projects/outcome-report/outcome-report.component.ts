import { Component, OnInit, Input } from '@angular/core';
import { MatExpansionPanel, MatDialog } from '@angular/material';
import { OutcomeDialogComponent } from '../../../master-modules/project-module/detail-project/outcome-dialog/outcome-dialog.component';
import { ProjectService } from '../../../master-modules/project-module/project.service';

@Component({
  selector: 'app-outcome-report',
  templateUrl: './outcome-report.component.html',
  styleUrls: ['./outcome-report.component.scss']
})
export class OutcomeReportComponent implements OnInit {
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
