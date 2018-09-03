import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeasuringUnitService {

  constructor(private app:AppService) { }

  show(id){
    return this.app.show(apiRoutes.measuring_units.show,id);
  }
}
