import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MONTHS} from '../../constants/utility';

@Component({
  selector: 'ngez-gantt-month-row',
  templateUrl: './ngez-gantt-month-row.component.html',
  styleUrls: ['./ngez-gantt-month-row.component.scss']
})
export class NgezGanttMonthRowComponent implements OnInit {
  months = MONTHS;
  constructor() { }

  ngOnInit() {

  }

}
