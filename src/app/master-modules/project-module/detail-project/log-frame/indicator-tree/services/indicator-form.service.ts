import { AppService } from '../../../../../../services/app.service';
import { apiRoutes } from '../../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicatorFormService {

  constructor(private app:AppService) { }

  store(indicatorId:any,formId:any,calculationMethod:any,valueField:any){
    const datas=JSON.stringify({
      indicator_id:indicatorId,
      form_id:formId,
      calculation_method_id:calculationMethod,
      disaggregation:valueField
    });
   return this.app.post(apiRoutes.indicatorForm.store,datas);
  }
  show(id){
   return this.app.show(apiRoutes.indicatorForm.show,id);
  }
}
