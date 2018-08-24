import { AppService } from '../../services/app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private app:AppService) { }

  index(){
    return this.app.get(apiRoutes.models.index);
  }
}
