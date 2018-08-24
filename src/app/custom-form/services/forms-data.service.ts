import { AppService } from '../../services/app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class FormsDataService {

  constructor(private app:AppService) { }

  store(id:number,formData:string){
    const datas=JSON.stringify({
      form_id:id,
      data:formData
    });
   return this.app.post(apiRoutes.formsData.store,datas);
  }

  show(id){
    return this.app.show(apiRoutes.formsData.show,id);
  }
}
