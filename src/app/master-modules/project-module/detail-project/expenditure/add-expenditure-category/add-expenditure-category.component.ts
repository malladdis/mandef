import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../project.service';
import {ToasterNotificationService} from '../../../../../services/toaster-notification.service';

@Component({
  selector: 'app-add-expenditure-category',
  templateUrl: './add-expenditure-category.component.html',
  styleUrls: ['./add-expenditure-category.component.scss']
})
export class AddExpenditureCategoryComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private toaster: ToasterNotificationService) { }

  ngOnInit() {
  }
  submit(form) {
    this.projectService.addExpenditureCategiries(JSON.stringify(form.value)).subscribe(response => {
      this.toaster.success('success', response['message']);
    });
  }
}
