import { Injectable } from '@angular/core';
import { AppService } from '../../../../../../services/app.service';
import { apiRoutes } from '../../../../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class IndicatorFormFieldsService {

  constructor(private app:AppService) { }

  store(indicatorFormId:number,names:string){
    const datas=JSON.stringify({
      indicator_form_id:indicatorFormId,
      name:names
    });

    return this.app.post(apiRoutes.indicatorFields.store,datas);
  }

  update(indicatorFormId:number,names:string){
    const datas=JSON.stringify({
      indicator_form_id:indicatorFormId,
      name:names
    });

    return this.app.put(apiRoutes.indicatorFields.update,indicatorFormId,datas);
  }
}
