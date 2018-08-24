import { Injectable } from '@angular/core';
import {AppService} from '../../../services/app.service';
import {apiRoutes} from '../../../app.constants';
import {Program} from '../../../models/program';

@Injectable()
export class ProgramService {

  constructor(private app: AppService) { }

  getProgramCategories() {
    return this.app.get(apiRoutes.programCategory.index);
  }
  storeProgramCategory(form) {
    const datas = JSON.stringify({
      name: form.value.name,
      description: form.value.description
    });
    return this.app.post(apiRoutes.programCategory.store, datas);
  }
  storeProgramDetail(id, form) {
    const detail = JSON.stringify({
      program_id: id,
      country: 'Ethiopia',
      budget: form.value.budget,
      starting_date: form.value.start,
      ending_date: form.value.end
    });
    return this.app.post(apiRoutes.program_detail.store, detail);
  }
  index() {
    return this.app.get(apiRoutes.program.index);
  }

  store(form) {
    const datas = JSON.stringify({
      program_category_id: form.value.category,
      name: form.value.name,
      description: form.value.description
    });

     this.app.post(apiRoutes.program.store, datas).subscribe(data => {
           this.storeProgramDetail(data['data']['id'], form).subscribe(res => {
            form.resetForm();
          });
     });
  }
  show(id) {
    return this.app.show(apiRoutes.program.show, id);
  }
}
