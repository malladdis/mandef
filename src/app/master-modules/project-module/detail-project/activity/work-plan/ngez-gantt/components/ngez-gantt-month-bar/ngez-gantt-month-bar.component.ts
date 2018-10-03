import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngez-gantt-month-bar',
  templateUrl: './ngez-gantt-month-bar.component.html',
  styleUrls: ['./ngez-gantt-month-bar.component.scss']
})
export class NgezGanttMonthBarComponent implements OnInit {
  @Input()
  monthName;
  constructor() { }

  ngOnInit() {
  }

}
