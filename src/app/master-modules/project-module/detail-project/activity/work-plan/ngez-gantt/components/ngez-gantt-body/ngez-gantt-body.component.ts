import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../interfaces/project';
@Component({
  selector: 'ngez-gantt-body',
  templateUrl: './ngez-gantt-body.component.html',
  styleUrls: ['./ngez-gantt-body.component.scss']
})
export class NgezGanttBodyComponent implements OnInit {
  @Input()
  project: Project;
  constructor() { }

  ngOnInit() {
  }

}
