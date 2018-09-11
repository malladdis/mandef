import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service';
import { apiRoutes } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class OutcomesService {

  constructor(private app:AppService) { }

  show(id){
    return this.app.show(apiRoutes.outcomes.show,id);
  }
}
