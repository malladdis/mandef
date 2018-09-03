import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailProjectComponent} from '../../detail-project.component';
import {ActivityComponent} from '../../activity/activity.component';
import {LogFrameComponent} from '../../log-frame/log-frame.component';
import {OverviewComponent} from '../../overview/overview.component';
import {ExpenditureComponent} from '../../expenditure/expenditure.component';
<<<<<<< HEAD
import { DataEntryComponent } from '../../data-entry/data-entry.component';
=======
import {ActivityDetailComponent} from '../../activity/activity-detail/activity-detail.component';
import {FinanceComponent} from '../../finance/finance.component';
>>>>>>> 7b42172a302a950d0b22ba2669fc4fa4018ffe44

const detailRoutes: Routes = [{
  path: '', component: DetailProjectComponent, children: [
    {path: 'overview/:id', component: OverviewComponent},
    {path: 'activities/:id', component: ActivityComponent},
    {path: 'logframe/:id', component: LogFrameComponent},
<<<<<<< HEAD
    {path:'data-entry/:id',component:DataEntryComponent},
    {path: 'expenditure/:id', component: ExpenditureComponent},
=======
    {path: 'finance/:id', component: FinanceComponent},
    {path: 'activity-detail/:activity_id', component: ActivityDetailComponent},
>>>>>>> 7b42172a302a950d0b22ba2669fc4fa4018ffe44
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
