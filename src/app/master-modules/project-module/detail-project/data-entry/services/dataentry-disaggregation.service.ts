import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataentryDisaggregationService {

  constructor(private app:AppService) { }

  store(id:any,json:any){
    const datas=JSON.stringify({
      data_entry_id:id,
      data:json
    });
   return this.app.post(apiRoutes.dataEntryDisaggregation.store,datas);
  }
}
