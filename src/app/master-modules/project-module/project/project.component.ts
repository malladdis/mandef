import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../project.service';
import {Project} from '../../../models/project';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Array<Project> = [];

  constructor(private projectservice: ProjectService, private router: Router) {
  }

  ngOnInit() {
    this.projectservice.index().subscribe(data => {
      this.projects = data['data'];
      console.log(data);
    });
  }

  toggle(value) {
    if (value.featured) {
      value.featured = false;
      const data = JSON.stringify({
        id: value.id,
        program_id: value.program_id,
        project_category_id: value.project_category_id,
        name: value.name,
        description: value.description,
        featured: value.featured,
        status_id: value.status_id,
        created_at: value.created_at,
        updated_at: value.created_at,
        deleted_at: value.deleted_at
      });
      this.projectservice.update(value.id, data).subscribe(data => {
        console.log(data);
      });
      console.log(value);
    }
    else {
      value.featured = true;
      const data = JSON.stringify({
        id: value.id,
        program_id: value.program_id,
        project_category_id: value.project_category_id,
        name: value.name,
        description: value.description,
        featured: value.featured,
        status_id: value.status_id,
        created_at: value.created_at,
        updated_at: value.created_at,
        deleted_at: value.deleted_at
      });
      this.projectservice.update(value.id, JSON.stringify(value)).subscribe(data => {
        console.log(data);
      });
    }
  }

  detail(id) {
    this.router.navigate([`/auth/master-modules/project/detail/${id}/overview/${id}`]);
  }
}
