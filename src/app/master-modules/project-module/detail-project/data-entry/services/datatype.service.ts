import { Injectable } from '@angular/core';
import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DatatypeService {

  constructor(private app:AppService) { }

  index(){
    return this.app.get(apiRoutes.datatypes.index);
  }
}
