import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../interfaces/task';
import {ColorBar} from '../../interfaces/color-bar';
import {MONTHS} from '../../constants/utility';
import {MatDialog} from '@angular/material';
import {NgezGanttBarDetailComponent} from '../ngez-gantt-bar-detail/ngez-gantt-bar-detail.component';
import {Project} from '../../interfaces/project';

@Component({
  selector: 'ngez-gantt-color-row',
  templateUrl: './ngez-gantt-color-row.component.html',
  styleUrls: ['./ngez-gantt-color-row.component.scss']
})
export class NgezGanttColorRowComponent implements OnInit {
  bars: ColorBar[] = [];
  @Input()
  task: Task;
  @Input()
  project: Project;
  constructor(private matdialog: MatDialog) { }

  ngOnInit() {
    this.generateColorBar(this.task);
    console.log(this.bars);
  }

  generateColorBar(task: Task) {
    for (let i = 0; i < MONTHS.length; i++) {
      if (task.start.getMonth() <= i && i <= task.end.getMonth()) {
        this.bars.push({id: i + 1, background_color: '#5c6bc0'});
      } else {
        this.bars.push({id: i + 1, background_color: '#f5f5f5'});
      }
    }
  }

  openDialog(bar: ColorBar) {
    if (bar.background_color !== '#f5f5f5') {
      this.matdialog.open(NgezGanttBarDetailComponent, { data: {'task': this.task, 'project': this.project},
        width: '300px', height: '200px', disableClose: false});
    }
  }
}
