import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrequenciesService {

  constructor(private app:AppService) { }

  index(){
    return this.app.get(apiRoutes.frequencies.index);
  }

  show(id){
    return this.app.show(apiRoutes.frequencies.show,id);
  }
}
