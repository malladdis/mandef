import {Component, Inject, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';
import {ToasterNotificationService} from '../../../../../services/toaster-notification.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.scss']
})
export class AddExpenditureComponent implements OnInit {
  categories: Array<Object>;
  constructor(private projectservice: ProjectService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toaster: ToasterNotificationService) { }

  ngOnInit() {
    this.getExpenditureCategories();
  }
  getExpenditureCategories() {
    this.projectservice.getExpenditureCategories().subscribe(data => {
      this.categories = data['data'];
    });
  }
  submit(form) {
    const preData = JSON.stringify({
      project_id: this.data['project_id'],
      expenditure_category_id: form.value.category,
      name: form.value.name
    });
    this.projectservice.addExpenditure(preData).subscribe(response => {
      this.toaster.success('success', response['message']);
    });
  }
}
