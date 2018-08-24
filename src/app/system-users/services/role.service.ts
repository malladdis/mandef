import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service';
import { apiRoutes } from '../../app.constants';

@Injectable()
export class RoleService {

  constructor(private app:AppService) { }

  index(){
    return this.app.get(apiRoutes.roles.index);
  }

  store(form){
    const datas=JSON.stringify({
      name:form.name,
      description:form.description

    });
   return this.app.post(apiRoutes.roles.store,datas);

  }
}
