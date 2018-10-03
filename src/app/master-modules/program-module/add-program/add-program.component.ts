import { Component, OnInit } from '@angular/core';
import {ProgramService} from '../program/program.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BudgetService} from '../../budget-module/budget.service';
import {HttpClient} from '@angular/common/http';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {
  categories: Array<Object> = [];
  currencies: Array<Object>;
  addProgramForm: FormGroup;
  selectedCurrency = 'USD';
  inEth = 0;
  exchangeRate  = 0;
  constructor(private programservice: ProgramService,
              private formbuilder: FormBuilder,
              private budgetservice: BudgetService,
              private http: HttpClient) { }

  ngOnInit() {
    this.programservice.getProgramCategories().subscribe((data: Array<Object>) => {
      this.categories = data['data'];
    });
    this.createForm();
    this.getCurrencies();
    this.getExchangeRate(this.selectedCurrency);
  }

  createForm() {
    this.addProgramForm = this.formbuilder.group({
      currency_id: this.selectedCurrency,
      category: '',
      name: '',
      budget: '',
      start: '',
      end: '',
      description: ''
    });
    this.addProgramForm.controls.currency_id.valueChanges.subscribe(data => {
      this.getExchangeRate(data);
    });
    this.addProgramForm.controls.budget.valueChanges.subscribe(data => {
      this.manageCurrency(data);
    });
  }
  getCurrencies() {
    this.budgetservice.getCurrencies().subscribe(data => {
      this.currencies = data['data'];
      console.log(data['data']);
    });
  }
  manageCurrency(am: number) {
    this.inEth = this.exchangeRate * am;
  }
  getExchangeRate(from) {
    const ft = `${from}_${'ETB'}`;
    const tf = `${'ETB'}_${from}`;
    this.http.get(`https://free.currencyconverterapi.com/api/v5/convert/?q=${ft},${tf}&compact=ultra`)
      .subscribe(data => {
        this.exchangeRate = data[ft] ;
      });
  }
  submit() {
    this.programservice.store(this.addProgramForm);
    // console.log(this.addProgramForm);
  }
}
