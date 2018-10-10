import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service';
import { apiRoutes } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {

  constructor(private app:AppService) { }

  index(){
    return this.app.get(apiRoutes.sharedForm.index);
  }
  store(userId:number,formId:number){
    let datas=JSON.stringify({
      form_id:formId,
      user_id:userId
    })
    return this.app.post(apiRoutes.sharedForm.store,datas);
  }
  show(id){
    return this.app.show(apiRoutes.sharedForm.show,id);
  }
  destroy(id){
    return this.app.destroy(apiRoutes.sharedForm.destroy,id);
  }

  update(userId:any,formId:any){
    let datas=JSON.stringify({
      form_id:formId,
      user_id:userId
    })
    return this.app.put(apiRoutes.sharedForm.update,userId,datas);
  }
}
