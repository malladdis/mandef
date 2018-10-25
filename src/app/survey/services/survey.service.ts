import { Injectable } from '@angular/core';
import { AppService } from '../../services/app.service';
import { apiRoutes } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private app:AppService) { }

  index(){

    return this.app.get(apiRoutes.survyes.index);

  }

  store(title:string,survey_category_id:number,description:string) {

    const datas= JSON.stringify({
      'title':title,
      'description':description,
      'survey_category_id':survey_category_id
    });

    return this.app.post(apiRoutes.survyes.store,datas);

  }

  show(id){
    return this.app.show(apiRoutes.survyes.show,id);
  }
}
