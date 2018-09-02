import { AppService } from '../../../../../services/app.service';
import { apiRoutes } from '../../../../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeriodsService {
  constructor(private app:AppService) { }

  current(frequencies){
  return this.app.show(apiRoutes.periods.show,frequencies);
  }
}
