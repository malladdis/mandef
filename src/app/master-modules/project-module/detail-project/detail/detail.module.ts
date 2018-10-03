import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {MatFileUploadModule} from 'angular-material-fileupload';
import {NgezGanttModule} from '../activity/work-plan/ngez-gantt/ngez-gantt.module';
import {DataEntryComponent} from '../data-entry/data-entry.component';
import {BiannualTableComponent} from '../data-entry/biannual-table/biannual-table.component';
import {QuarterTableComponent} from '../data-entry/quarter-table/quarter-table.component';
import {AnnualTableComponent} from '../data-entry/annual-table/annual-table.component';
import {MonthlyComponent} from '../data-entry/monthly/monthly.component';
import {DataEntryDialogComponent} from '../data-entry/data-entry-dialog/data-entry-dialog.component';
import {FinanceComponent} from '../finance/finance.component';
import {FilterPipePipe} from '../data-entry/pipe/filter-pipe.pipe';
import {ShowAllComponent} from '../data-entry/show-all/show-all.component';
import {ActivityDetailComponent} from '../activity/activity-detail/activity-detail.component';
import {AddFinanceDialogComponent} from '../finance/add-finance-dialog/add-finance-dialog.component';
import {AddExpenditureCategoryComponent} from '../expenditure/add-expenditure-category/add-expenditure-category.component';
import {AddExpenditureComponent} from '../expenditure/add-expenditure/add-expenditure.component';
import {FinancialReportComponent} from '../expenditure/financial-report/financial-report.component';
import {WorkPlanComponent} from '../activity/work-plan/work-plan.component';
import {TagPipe} from '../activity/activity-detail/tag.pipe';
import {AddMilestoneComponent} from '../activity/work-plan/add-milestone/add-milestone.component';
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
    PerfectScrollbarModule,
    MatFileUploadModule,
    NgezGanttModule
  ],
  declarations: [DetailProjectComponent, OverviewComponent,
    ActivityComponent, LogFrameComponent, OutcomeTreeComponent, DataEntryComponent,
    BiannualTableComponent, QuarterTableComponent, AnnualTableComponent,
    MonthlyComponent,
    DataEntryDialogComponent, FinanceComponent, FilterPipePipe, ShowAllComponent,
    IndicatorTreeComponent, ActivityTreeComponent, OutputTreeComponent, ExpenditureComponent,
    ActivityDialogComponent, IndicatorDialogComponent, OutcomeDialogComponent,
    OutputDialogComponent, InputDialogComponent, ActivityDetailComponent,
    AddFinanceDialogComponent, AddExpenditureCategoryComponent, AddExpenditureComponent,
    FinancialReportComponent, WorkPlanComponent, TagPipe, AddMilestoneComponent],
  exports: [DetailProjectComponent, OverviewComponent, FilterPipePipe,
    ActivityComponent, LogFrameComponent, OutcomeTreeComponent,
    IndicatorTreeComponent, ActivityTreeComponent, OutputTreeComponent,
    ActivityDialogComponent, IndicatorDialogComponent, OutcomeDialogComponent, FinanceComponent,
    OutputDialogComponent, InputDialogComponent, ActivityDetailComponent,
    AddFinanceDialogComponent, AddExpenditureCategoryComponent, AddExpenditureComponent,
    FinancialReportComponent, WorkPlanComponent, TagPipe, AddMilestoneComponent],
  entryComponents: [
    ActivityDialogComponent,
    IndicatorDialogComponent,
    OutcomeDialogComponent,
    OutputDialogComponent,
    InputDialogComponent,
    AddFinanceDialogComponent,
    AddExpenditureCategoryComponent,
    AddExpenditureComponent,
    DataEntryDialogComponent,
    ShowAllComponent,
    FinancialReportComponent,
    AddMilestoneComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ]
})
export class DetailModule {
}
