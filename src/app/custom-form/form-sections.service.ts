import { AppService } from '../services/app.service';
import { apiRoutes } from '../app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class FormSectionsService {

  constructor(private app:AppService) { }

  index(){
    return this.app.get(apiRoutes.formSections.index);
  }
}


