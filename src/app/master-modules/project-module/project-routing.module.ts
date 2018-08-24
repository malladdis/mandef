import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {ProjectCategoryComponent} from './project-category/project-category.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {DetailProjectComponent} from './detail-project/detail-project.component';
const projectRoutes: Routes = [
  {path: '', component: ProjectComponent},
  {path: 'add', component: AddProjectComponent},
  {path: 'detail/:id', loadChildren: './detail-project/detail/detail.module#DetailModule'},
  {path: 'add-category', component: ProjectCategoryComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
