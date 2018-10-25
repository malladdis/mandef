import {Component, Inject, OnInit} from '@angular/core';
import {ToasterNotificationService} from '../../../../../services/toaster-notification.service';
import {ProjectService} from '../../../project.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-milestone-actual-value',
  templateUrl: './add-milestone-actual-value.component.html',
  styleUrls: ['./add-milestone-actual-value.component.scss']
})
export class AddMilestoneActualValueComponent implements OnInit {

  constructor(private toaster: ToasterNotificationService,
              private projectService: ProjectService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  submit(form) {
    this.projectService.add_milestone_actual_values(form.value)
      .subscribe(data => {
        this.toaster.success('success', data['message']);
        form.resetForm();
      });
  }
}
