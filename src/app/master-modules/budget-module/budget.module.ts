import { AddBudgetDialogComponent } from './add-budget-dialog/add-budget-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material.module';
const budgetRoutes: Routes = [
  {path: '', component: BudgetComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(budgetRoutes)
  ],
  declarations: [BudgetComponent, AddBudgetDialogComponent],
  exports: [RouterModule, BudgetComponent, AddBudgetDialogComponent],
  entryComponents: [AddBudgetDialogComponent]
})
export class BudgetModule { }
