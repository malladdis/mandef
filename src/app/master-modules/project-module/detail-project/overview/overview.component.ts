import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  id: number;
  project: any;
  constructor(private route: ActivatedRoute, private projectserivce: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.projectserivce.show(+params['id']).subscribe(data => {
        this.project = data['data'];
        console.log(data['data']);
      });
    });
    console.log('hee');
  }
}
