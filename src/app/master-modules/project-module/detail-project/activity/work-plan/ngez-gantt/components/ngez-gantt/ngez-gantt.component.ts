import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../interfaces/project';

@Component({
  selector: 'ngez-gantt',
  templateUrl: './ngez-gantt.component.html',
  styleUrls: ['./ngez-gantt.component.scss']
})
export class NgezGanttComponent implements OnInit {
  @Input()
  _project: Project;
  constructor() {
  }

  ngOnInit() {
  }

}
