import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {
  id;
  categories: Array<Object>;
  constructor(private route: ActivatedRoute,
              private projectserivce: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = +params['id'];
    });
    this.getExpenditureCategories();
  }
  getExpenditureCategories() {
    this.projectserivce.getExpenditureCategories().subscribe(data => {
      this.categories = data['data'];
      console.log(data);
    });
  }
}
