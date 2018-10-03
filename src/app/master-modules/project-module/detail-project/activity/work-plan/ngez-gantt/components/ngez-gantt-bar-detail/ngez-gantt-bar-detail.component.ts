import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'ngez-gantt-bar-detail',
  templateUrl: './ngez-gantt-bar-detail.component.html',
  styleUrls: ['./ngez-gantt-bar-detail.component.scss']
})
export class NgezGanttBarDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
