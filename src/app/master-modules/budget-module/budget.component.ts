import { Component, OnInit } from '@angular/core';
import {AddBudgetDialogComponent} from './add-budget-dialog/add-budget-dialog.component';
import {MatDialog} from '@angular/material';
import {BudgetService} from './budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  budgets: Array<Object>;
  columns = ['no', 'budget', 'donor' , 'amount', 'remaining'];
  constructor(private dialog: MatDialog,
              private budgetService: BudgetService) { }

  ngOnInit() {
    this.getBudgets();
  }

  getBudgets() {
    this.budgetService.getBudgets().subscribe(data => {
      this.budgets = data['data'];
      console.log(data['data']);
    });
  }
  addBudget() {
    this.dialog.open(AddBudgetDialogComponent, {width: '500px', height: '450px', disableClose: true});
  }
}
