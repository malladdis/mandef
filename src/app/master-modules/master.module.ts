import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterModulesRouter} from './master-modules.router';
import {ProgramService} from './program-module/program/program.service';
import {ProjectService} from './project-module/project.service';
import {DonorService} from './donor-module/donor.service';
import {BudgetService} from './budget-module/budget.service';
import {FinanceReportService} from './project-module/detail-project/expenditure/financial-report/finance-report.service';
import {ExcelService} from './project-module/detail-project/expenditure/financial-report/excel.service';

@NgModule({
  imports: [
    CommonModule,
    MasterModulesRouter
  ],
  providers: [ProgramService, ProjectService, DonorService, BudgetService, FinanceReportService, ExcelService]
})
export class MasterModule { }
