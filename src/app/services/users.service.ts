import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private app:AppService) { }

  index(){
    return this.app.get(apiRoutes.users.index);
  }

  store(form){
    const datas=JSON.stringify({
      name:form.name,
      email:form.email,
      role_id:form.role_id,
      password:form.password
    });
    return this.app.post(apiRoutes.users.store,datas);
  }
}
