import { Injectable } from '@angular/core';
import {AppService} from '../../../../../services/app.service';
import {apiRoutes} from '../../../../../app.constants';

@Injectable()
export class FinanceReportService {

  constructor(private appservice: AppService) { }
  getFinanceReport(plans) {
      return this.appservice.show(apiRoutes.finance.financial_report,
        plans
      );
  }
}
