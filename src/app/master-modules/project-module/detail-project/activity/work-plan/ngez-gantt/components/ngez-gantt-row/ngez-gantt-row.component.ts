import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../interfaces/task';
import {Project} from '../../interfaces/project';
@Component({
  selector: 'ngez-gantt-row',
  templateUrl: './ngez-gantt-row.component.html',
  styleUrls: ['./ngez-gantt-row.component.scss']
})
export class NgezGanttRowComponent implements OnInit {
  @Input()
  task: Task;
  @Input()
  project: Project;
  constructor() {
  }

  ngOnInit() {}

}
