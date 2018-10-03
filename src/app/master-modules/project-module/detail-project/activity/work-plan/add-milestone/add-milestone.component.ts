import {Component, Inject, OnInit} from '@angular/core';
import {ProjectService} from '../../../../project.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ToasterNotificationService} from '../../../../../../services/toaster-notification.service';

@Component({
  selector: 'app-add-milestone',
  templateUrl: './add-milestone.component.html',
  styleUrls: ['./add-milestone.component.scss']
})
export class AddMilestoneComponent implements OnInit {
  onbudget = false;
  constructor(
    private projectService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toaster: ToasterNotificationService
  ) { }

  ngOnInit() {
  }
  submit(form) {
    const data = JSON.stringify({
      name: form.value.name,
      activity_id: this.data['activity_id'],
      start: form.value.start.format('YYYY-MM-DD HH:mm:ss'),
      end: form.value.end.format('YYYY-MM-DD HH:mm:ss'),
      baseline: form.value.baseline,
      target: form.value.target,
      budget: form.value.onbudget ? form.value.budget : 0
    });
    this.projectService.addMilestone(data).subscribe(response => {
      this.toaster.success('success', response['message']);
      form.resetForm();
    });
  }
}
