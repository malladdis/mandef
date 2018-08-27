import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailProjectComponent} from '../../detail-project.component';
import {ActivityComponent} from '../../activity/activity.component';
import {LogFrameComponent} from '../../log-frame/log-frame.component';
import {OverviewComponent} from '../../overview/overview.component';
import {ExpenditureComponent} from '../../expenditure/expenditure.component';
import {ActivityDetailComponent} from '../../activity/activity-detail/activity-detail.component';

const detailRoutes: Routes = [{
  path: '', component: DetailProjectComponent, children: [
    {path: 'overview/:id', component: OverviewComponent},
    {path: 'activities/:id', component: ActivityComponent},
    {path: 'logframe/:id', component: LogFrameComponent},
    {path: 'expenditure/:id', component: ExpenditureComponent},
    {path: 'activity-detail/:activity_id', component: ActivityDetailComponent},
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
