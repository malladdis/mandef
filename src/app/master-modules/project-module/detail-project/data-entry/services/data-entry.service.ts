import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  constructor(private app:AppService) { }
  store(indicatorId:number,frequencySymbol:string,actualValue:number){
    const datas= JSON.stringify({
      indicator_id:indicatorId,
      frequency_symbol:frequencySymbol,
      actual_value:actualValue
    });

    return this.app.post(apiRoutes.dataEntry.store,datas);
  }
  show(indicatorId){
   return this.app.show(apiRoutes.dataEntry.show,indicatorId);
  }
}
