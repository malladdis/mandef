import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicatorCalculationmethodService {

  constructor(private app:AppService) { }

  show(id){
    return this.app.show(apiRoutes.indicatorCalculationMethod.show,id);
  }
}
