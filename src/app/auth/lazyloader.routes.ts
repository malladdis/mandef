import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {DashboardCrmComponent} from '../dashboard-crm/dashboard-crm.component';
import {MasterModule} from '../master-modules/master.module';

export const appRoutes: Routes = [{
  path: '', component: AuthComponent, children: [
    {path: 'dashboard', component: DashboardCrmComponent},
    {path: 'master-modules', loadChildren: '../master-modules/master.module#MasterModule'},
    {path: 'pages', loadChildren: '../pages/pages.module#PagesModule'},
    {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},
    {path: 'custom-forms', loadChildren: '../custom-form/custom-form.module#CustomFormModule'},
    {path: 'reports', loadChildren: '../reports/reports.module#ReportsModule'}

  ]
}];
