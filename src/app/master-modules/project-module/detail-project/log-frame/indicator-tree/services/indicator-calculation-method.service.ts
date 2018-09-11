import { AppService } from '../../../../../../services/app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../../../../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class IndicatorCalculationMethodService {

  constructor(private app:AppService) { }

  store(indicatoID:any,calculationId:any){
    const datas=JSON.stringify({
      indicator_id:indicatoID,
      calculation_method_id:calculationId
    });
    return this.app.post(apiRoutes.indicatorCalculationMethod.store,datas);
  }
}
