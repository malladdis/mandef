import { AppService } from '../services/app.service';
import { apiRoutes } from '../app.constants';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomFormsService {

  constructor(private app:AppService) { }
  
  index(){
    return this.app.get(apiRoutes.customForms.index);
  }
  create(form){
    const datas=JSON.stringify({
      title:form.value.title,
      description:form.value.description
    });
   return this.app.post(apiRoutes.customForms.store,datas);
  }

  show(id){
    return this.app.show(apiRoutes.customForms.show,id);
  }
}