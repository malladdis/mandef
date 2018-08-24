import { Component, OnInit } from '@angular/core';
import {ProgramService} from '../program/program.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {
  categories: Array<Object> = [];
  constructor(private programservice: ProgramService) { }

  ngOnInit() {
    this.programservice.getProgramCategories().subscribe((data: Array<Object>) => {
      this.categories = data['data'];
    });
  }
  submit(form) {
    this.programservice.store(form);
  }
}
