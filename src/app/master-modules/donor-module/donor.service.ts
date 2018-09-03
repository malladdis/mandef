import {Injectable} from '@angular/core';
import {AppService} from '../../services/app.service';
import {apiRoutes} from '../../app.constants';


@Injectable()
export class DonorService {
  constructor(private appservice: AppService) {
  }

  addDonor(name, contact) {
    const data = JSON.stringify({
      name: name,
      contact: contact
    });
    return this.appservice.post(apiRoutes.donors.store, data);
  }
  getDonors() {
    return this.appservice.get(apiRoutes.donors.index);
  }
}
