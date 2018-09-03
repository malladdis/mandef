import { Injectable } from '@angular/core';
import {AppService} from '../../services/app.service';
import {apiRoutes} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private appservice: AppService) { }

  getCurrencies() {
   // return this.appservice.get(apiRoutes.cur.index);
  }
  addBudget(value) {
    //return this.appservice.post(apiRoutes.budgets.store, JSON.stringify(value));
  }
  getBudgets() {
    //return this.appservice.get(apiRoutes.budgets.index);
  }
}
