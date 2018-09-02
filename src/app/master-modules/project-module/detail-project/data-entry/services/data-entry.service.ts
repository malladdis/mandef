import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  constructor(private app:AppService) { }

  show(indicatorId){
   return this.app.show(apiRoutes.dataEntry.show,indicatorId);
  }
}
