import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-category',
  templateUrl: './project-category.component.html',
  styleUrls: ['./project-category.component.scss']
})
export class ProjectCategoryComponent implements OnInit {

  constructor(private projectservice: ProjectService) { }

  ngOnInit() {
  }

  submit(form) {
    this.projectservice.addProjectCategory(form).subscribe(data => console.log(data));
  }
}
