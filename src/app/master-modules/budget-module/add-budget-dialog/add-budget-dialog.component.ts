import {Component, OnInit, ViewChild} from '@angular/core';
import {DonorService} from '../../donor-module/donor.service';
import {BudgetService} from '../budget.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToasterNotificationService} from '../../../services/toaster-notification.service';

@Component({
  selector: 'app-add-budget-dialog',
  templateUrl: './add-budget-dialog.component.html',
  styleUrls: ['./add-budget-dialog.component.scss']
})
export class AddBudgetDialogComponent implements OnInit {
  donors: Array<Object>;
  currencies: Array<Object>;
  @ViewChild('bForm') budgetFormDirective;
  budgetForm: FormGroup;
  selectedCurrency = 'USD';
  inEth = 0;
  exchangeRate  = 0;
  constructor(private donorService: DonorService,
              private budgetservice: BudgetService,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private toaster: ToasterNotificationService) {
    this.createForm();
  }

  ngOnInit() {
    this.getDonors();
    this.getCurrencies();
    this.getExchangeRate(this.selectedCurrency);
  }
  getExchangeRate(from) {
    const ft = `${from}_${'ETB'}`;
    const tf = `${'ETB'}_${from}`;
    this.http.get(`https://free.currencyconverterapi.com/api/v5/convert/?q=${ft},${tf}&compact=ultra`)
      .subscribe(data => {
        this.exchangeRate = data[ft] ;
      });
  }
  createForm() {
    this.budgetForm = this.formBuilder.group({
      name: '',
      donor_id: '',
      amount: '',
      currency_id: 'USD'
    });
    this.budgetForm.controls.currency_id.valueChanges.subscribe(data => {
      this.getExchangeRate(data);
    });
    this.budgetForm.controls.amount.valueChanges.subscribe(data => {
      this.manageCurrency(data);
    });
  }
  manageCurrency(am: number) {
    this.inEth = this.exchangeRate * am;
  }
  getDonors() {
    this.donorService.getDonors().subscribe(data => {
        this.donors = data['data'];
    });
  }
  getCurrencies() {
    this.budgetservice.getCurrencies().subscribe(data => {
      this.currencies = data['data'];
      console.log(data['data']);
    });
  }
  addBudget() {
    this.budgetservice.addBudget(this.budgetForm.value).subscribe(data => {
      this.budgetForm.reset();
      this.budgetFormDirective.resetForm();
      this.toaster.success('success', data['message']);
    });
  }
}
