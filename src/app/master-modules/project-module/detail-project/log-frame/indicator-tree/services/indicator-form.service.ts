import { AppService } from '../../../../../../services/app.service';
import { apiRoutes } from '../../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicatorFormService {

  constructor(private app:AppService) { }

 
  show(id){
   return this.app.show(apiRoutes.indicatorForm.show,id);
  }
  store(indicatorId:number,formId:number,calculationId:number){
    const datas=JSON.stringify({
      indicator_id:indicatorId,
      form_id:formId,
      calculation_method_id:calculationId
    });
    return this.app.post(apiRoutes.indicatorForm.store,datas);
  }

  update(indicatorId:number,formId:number,calculationId:number){
    const datas=JSON.stringify({
      indicator_id:indicatorId,
      form_id:formId,
      calculation_method_id:calculationId
    });
    return this.app.put(apiRoutes.indicatorForm.store,indicatorId,datas);
  }
}
