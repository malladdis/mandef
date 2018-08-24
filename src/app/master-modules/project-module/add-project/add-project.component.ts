import { ClusterComponent } from './../cluster/cluster.component';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatDialog} from '@angular/material';
import {ProjectService} from '../project.service';
import {ProgramService} from '../../program-module/program/program.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  lat = 8.961794;
  lng = 38.6380581;
  zoom = 8;
  height = '200px';
  clusters: Array<Object> = [];
  categories: Array<Object> = [];
  implementers: Array<Object> = [];
  beneficaries: Array<Object> = [];
  project_categories: Array<Object> = [];
  users: Array<object> = [];
  frequencies: Array<Object> = [];
  constructor(private mapsAPILoader: MapsAPILoader,
     private projectservice: ProjectService,
     private programservice: ProgramService,
     public dialog: MatDialog ) {
       this.dialog.afterAllClosed.subscribe(() => {
          this.getClusters();
       });
     }

  ngOnInit() {
    this.programservice.getProgramCategories().subscribe(data => {
      this.categories = data['data'];
    });
    this.projectservice.getImplementers().subscribe(data => {
      this.implementers = data['data'];
    });
    this.projectservice.getBeneficaries().subscribe(data => {
      this.beneficaries = data['data'];
    });
    this.getClusters();
    this.getProjectCategories();
    this.getStafManager();
    this.getFrequencies();
  }
  getProjectCategories() {
    this.projectservice.getProjectCategories().subscribe(data => {
      this.project_categories = data['data'];
    });
  }
  getClusters() {
    this.projectservice.getClusters().subscribe(data => {
      this.clusters = data['data'];
    });
  }
  getStafManager() {
    this.projectservice.getManagers().subscribe((data: Array<Object>) => {
      this.users = data;
    });
  }
  getFrequencies() {
    this.projectservice.getFrequencies().subscribe(data => {
      this.frequencies = data['data'];
      console.log(data);
    });
  }
  openClusterForm() {
    this.dialog.open(ClusterComponent, {width: '500px', height: '450px', disableClose: true});
  }
  submit(form) {
    this.projectservice.addProject(form);
  }
}
