import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../project.service';
import {apiRoutes} from '../../../../app.constants';
import {TokenService} from '../../../../services/token.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  uploadURL;
  id: number;
  project: any;
  files: Array<Object>;
  constructor(private route: ActivatedRoute, private projectserivce: ProjectService, private tokenService: TokenService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.projectserivce.show(+params['id']).subscribe(data => {
        this.project = data['data'];
        console.log(data['data']);
        this.files = data['data']['files'];
      });
      this.uploadURL = `${apiRoutes.files.store}?token=${this.tokenService.get()}&is_activity_file=${0}&parent_id=${+params['id']}`  ;
    });
  }
}
