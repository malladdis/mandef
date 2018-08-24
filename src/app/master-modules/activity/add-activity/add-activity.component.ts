import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';
import {apiRoutes} from '../../../app.constants';


@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit() {
  }

  store(form) {
    const datas = JSON.stringify({
      name: form.value.name,
      description: form.value.description
    });
   /* this.app.post(apiRoutes.activity.store, datas).subscribe(data => {
      console.log(data);
    }); */
  }
}
