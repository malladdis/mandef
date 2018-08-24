import { Component, OnInit } from '@angular/core';
import {ProgramService} from '../program/program.service';

@Component({
  selector: 'app-program-category',
  templateUrl: './program-category.component.html',
  styleUrls: ['./program-category.component.scss']
})
export class ProgramCategoryComponent implements OnInit {

  constructor(private programservice: ProgramService) { }

  ngOnInit() {
    this.programservice.getProgramCategories().subscribe(data => console.log(data));
  }
  submit(form) {
    this.programservice.storeProgramCategory(form).subscribe(data => {console.log(data); });
  }
}
