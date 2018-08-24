import { AppService } from '../../services/app.service';
import { Injectable } from '@angular/core';
import { apiRoutes } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class FormDataFileService {

  constructor(private app:AppService) { 

  }

  store(form){
    
    console.log(form.controls.file_id.value);
  // return this.app.post(apiRoutes.formsDataFile.store,datas);
  }
  show(id){
    return this.app.show(apiRoutes.formsDataFile.show,id);
  }
}
