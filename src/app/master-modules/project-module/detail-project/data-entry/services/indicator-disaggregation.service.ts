import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicatorDisaggregationService {

  constructor(private app:AppService) { }

  index(){}

  store(indicatorId:any,disaggregationId:any){
    const datas=JSON.stringify({
      indicator_id:indicatorId,
      disaggregation_method_id:disaggregationId
    });
    return this.app.post(apiRoutes.indicatorDisaggregation.store,datas);
  }

  show(id){
    return this.app.show(apiRoutes.indicatorDisaggregation.show,id);
  }
  update(indicatoID:any,disaggregationId:any){
    const datas=JSON.stringify({
      indicator_id:indicatoID,
      disaggregation_method_id:disaggregationId
    });
    return this.app.put(apiRoutes.indicatorDisaggregation.update,2,datas);
  }
}
