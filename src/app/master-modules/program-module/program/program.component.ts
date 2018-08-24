import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Program} from '../../../models/program';
import {AppService} from '../../../services/app.service';
import {apiRoutes} from '../../../app.constants';
import {ResponsiveTableHelpers} from '../../../tables/responsive-table/helpers.data';
import {MatPaginator} from '@angular/material';
import {ProgramService} from './program.service';
import {ProgramTableHeaders} from './program-helpers.data';
import { AppResult } from '../../../services/app-result';
import { ServerResponse } from '../../../models/ServerResponse';


@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  programs: Array<Program> = [];
  programCategories: Array<Object> = [];
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;

  @ViewChild(MatPaginator) paginator1: MatPaginator;
  pageLength = 0;
  pageSize = 15;
  helpers = ProgramTableHeaders;
  keys: Array<any> = [];
  @Input() status;
  @Input() actionStatus;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() page = new EventEmitter();
  @Output() sort = new EventEmitter();
  @Output() dup = new EventEmitter();

  constructor(private programservice: ProgramService) {

  }

  ngOnInit() {
    this.programservice.getProgramCategories().subscribe((result: ServerResponse) => {
          console.log(result.success);
    });
    this.programservice.index().subscribe((data: Array<Program>) => {
      this.programs = data['data'];
      console.log(data['data']);
      if (this.programs[0]) {
        this.getRows();
        this.getKeys();
      }
    });
  }


  next(event) {
    this.rows = [];
    for (let i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize; i++) {
      this.rows = [...this.rows, this.programs[i]];
    }
  }

  getRows() {
    this.pageLength = this.programs.length;
    for (let i = 0; i < this.pageLength; i++) {
      this.rows = [...this.rows, this.programs[i]];
    }
  }

  sortData(val) {
    this.programs.sort();
  }
  getKeys() {
    this.keys = [];
    for (let i = 0; i < this.helpers.header.length; i++) {
      this.keys = [...this.keys, this.helpers.header[i].key];
    }
  }
}
