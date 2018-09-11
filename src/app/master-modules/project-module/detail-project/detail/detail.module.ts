import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailProjectComponent} from '../detail-project.component';
import {OverviewComponent} from '../overview/overview.component';
import {LogFrameComponent} from '../log-frame/log-frame.component';
import {OutcomeTreeComponent} from '../log-frame/outcome-tree/outcome-tree.component';
import {IndicatorTreeComponent} from '../log-frame/indicator-tree/indicator-tree.component';
import {ActivityTreeComponent} from '../log-frame/activity-tree/activity-tree.component';
import {OutputTreeComponent} from '../log-frame/output-tree/output-tree.component';
import {ActivityComponent} from '../activity/activity.component';
import {MaterialModule} from '../../../../material.module';
import {DetailRoutingModule} from './detail-routing/detail-routing.module';
import {ActivityDialogComponent} from '../activity-dialog/activity-dialog.component';
import {IndicatorDialogComponent} from '../indicator-dialog/indicator-dialog.component';
import {OutcomeDialogComponent} from '../outcome-dialog/outcome-dialog.component';
import {OutputDialogComponent} from '../output-dialog/output-dialog.component';
import {InputDialogComponent} from '../input-dialog/input-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ExpenditureComponent} from '../expenditure/expenditure.component';
import {ActivityDetailComponent} from '../activity/activity-detail/activity-detail.component';
import {FinanceComponent} from '../finance/finance.component';
import {AddFinanceDialogComponent} from '../finance/add-finance-dialog/add-finance-dialog.component';
import {AddExpenditureCategoryComponent} from '../expenditure/add-expenditure-category/add-expenditure-category.component';
import {AddExpenditureComponent} from '../expenditure/add-expenditure/add-expenditure.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule
  ],
  declarations: [DetailProjectComponent, OverviewComponent,
    ActivityComponent, LogFrameComponent, OutcomeTreeComponent,
    IndicatorTreeComponent, ActivityTreeComponent, OutputTreeComponent, ExpenditureComponent, FinanceComponent,
  ActivityDialogComponent, IndicatorDialogComponent, OutcomeDialogComponent,
    OutputDialogComponent, InputDialogComponent, ActivityDetailComponent,
    AddFinanceDialogComponent, AddExpenditureCategoryComponent, AddExpenditureComponent],
  exports: [DetailProjectComponent, OverviewComponent,
    ActivityComponent, LogFrameComponent, OutcomeTreeComponent,
    IndicatorTreeComponent, ActivityTreeComponent, OutputTreeComponent,
    ActivityDialogComponent, IndicatorDialogComponent, OutcomeDialogComponent, FinanceComponent,
    OutputDialogComponent, InputDialogComponent, ActivityDetailComponent,
    AddFinanceDialogComponent,  AddExpenditureCategoryComponent, AddExpenditureComponent],
  entryComponents: [
    ActivityDialogComponent,
    IndicatorDialogComponent,
    OutcomeDialogComponent,
    OutputDialogComponent,
    InputDialogComponent,
    AddFinanceDialogComponent,
    AddExpenditureCategoryComponent,
    AddExpenditureComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class DetailModule { }
