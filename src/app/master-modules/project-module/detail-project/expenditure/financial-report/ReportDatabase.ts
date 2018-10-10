import { DataSource} from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';
export interface ReportFormat {
    id: number;
    name: string;
    plans: {
      id: number;
      name: string;
      expenditures: Expenditure[]
    };
    overall: number;
}
export interface Expenditure {
  id: number;
  name: string;
  total: number;
}
export class ReportDatabase extends DataSource<any> {
  plans = new Set();
  constructor(data) {
    super();
  }
  connect(): Observable<ReportFormat[]> {
    return of([]);
  }
  disconnect() {}
  getPlans() {
    // credentials
  }
}
