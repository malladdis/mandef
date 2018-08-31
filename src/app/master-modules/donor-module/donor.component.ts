import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddDonorDialogComponent} from './add-donor-dialog/add-donor-dialog.component';
import {DonorService} from './donor.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.scss']
})
export class DonorComponent implements OnInit {
  donors: Array<Object>;
  donorList = [];
  coloumnKeys: any;
  columns = ['no', 'donor name', 'status', 'contact'];
  constructor(private dialog: MatDialog, private donorSerivce: DonorService) { }

  ngOnInit() {
    this.getDonors();
  }

  getDonors() {
    this.donorSerivce.getDonors().subscribe(data => {
      this.donors = data['data'];
      if(this.donors.length > 0) {
        this.prepareDonorsData(this.donors);
      }
    });
  }
  prepareDonorsData(donors) {
    for (let donor of donors) {
      this.donorList.push({
        name: donor['name'],
        status: donor['status'],
        contacts: JSON.parse(donor['contact']),
        keys: Object.keys(JSON.parse(donor['contact']))
      });
    }
  }
  addDonor() {
    this.dialog.open(AddDonorDialogComponent, {width: '500px', height: '450px', disableClose: true});
  }

}
