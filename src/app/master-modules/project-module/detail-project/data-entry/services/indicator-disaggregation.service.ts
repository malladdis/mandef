import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicatorDisaggregationService {

  constructor(private app:AppService) { }

  index(){}

  show(id){
    return this.app.show(apiRoutes.indicatorDisaggregation.show,id);
  }
}
