import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  finance: any;
  len = 0;
  constructor(private route: ActivatedRoute,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getFinanceByProject(+params['id']);
    });
  }

  getFinanceByProject(project_id) {
    this.projectService.getFinanceByProject(project_id).subscribe(data => {
      this.finance = data['data'];
      this.len = this.finance.length;
    });
  }
}
