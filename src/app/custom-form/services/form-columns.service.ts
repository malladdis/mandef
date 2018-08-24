import { AppService } from '../../services/app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../../app.constants';

@Injectable()
export class FormColumnsService {

  constructor(private app:AppService) { 

  }

  store(form_id:any,columnName:string){
    var datas=JSON.stringify({
      form_id:form_id,
      columns:columnName
    })
   return this.app.post(apiRoutes.formColumn.store,datas);
  }

  show(id){
    return this.app.show(apiRoutes.formColumn.show,id);
  }

  update(){

  }
  delete(){

  }
}
