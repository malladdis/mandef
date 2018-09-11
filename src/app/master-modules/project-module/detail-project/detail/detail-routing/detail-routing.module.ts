import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailProjectComponent} from '../../detail-project.component';
import {ActivityComponent} from '../../activity/activity.component';
import {LogFrameComponent} from '../../log-frame/log-frame.component';
import {OverviewComponent} from '../../overview/overview.component';
import {ExpenditureComponent} from '../../expenditure/expenditure.component';
import { DataEntryComponent } from '../../data-entry/data-entry.component';
import {ActivityDetailComponent} from '../../activity/activity-detail/activity-detail.component';
import {FinanceComponent} from '../../finance/finance.component';

const detailRoutes: Routes = [{
  path: '', component: DetailProjectComponent, children: [
    {path: 'overview/:id', component: OverviewComponent},
    {path: 'activities/:id', component: ActivityComponent},
    {path: 'logframe/:id', component: LogFrameComponent},
    {path: 'finance/:id', component: FinanceComponent},
    {path: 'expenditure/:finance_plan_id', component: ExpenditureComponent},
    {path: 'activity-detail/:activity_id', component: ActivityDetailComponent},
    {path: 'data-entry/:id', component: DataEntryComponent},
    {path: 'expenditure/:id', component: ExpenditureComponent},
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(detailRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DetailRoutingModule {
}
