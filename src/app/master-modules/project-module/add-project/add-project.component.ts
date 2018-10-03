import { ClusterComponent } from '../cluster/cluster.component';
import {Component, OnInit} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {MatDialog} from '@angular/material';
import {ProjectService} from '../project.service';
import {ProgramService} from '../../program-module/program/program.service';
import {FormControl} from '@angular/forms';
import {ToasterNotificationService} from '../../../services/toaster-notification.service';

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
  programControl = new FormControl('');
  program;
  currency = '__';
  budgetControl = new FormControl({value: '', disabled: true});
  isFormSumitable: boolean;
  selectedProgram: number;
  budget: number;
  constructor(private mapsAPILoader: MapsAPILoader,
     private projectservice: ProjectService,
     private programservice: ProgramService,
     public dialog: MatDialog,
              private toaster: ToasterNotificationService) {
       this.dialog.afterAllClosed.subscribe(() => {
          this.getClusters();
       });
     }

  ngOnInit() {
    this.programservice.getProgramCategories().subscribe(data => {
      this.categories = data['data'];
      console.log(data['data']);
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
    this.programControl.valueChanges.subscribe(data => {
      if (data !== '') {
        this.program = this.getProjectById(data);
        this.selectedProgram = data;
        this.currency = this.program['details']['currency_id'];
        if (this.program['details']['budget'] < this.program['allocated_budget']) {
          this.toaster.info('info', 'the selected program\'s budget gets too low, please update the budget before you continue');
          this.budgetControl.disable();
          this.isFormSumitable = false;
        } else { this.budgetControl.enable(); this.isFormSumitable = true; }
      } else {this.budgetControl.disable(); }
    });
    this.budgetControl.valueChanges.subscribe(data => {
      if (data && this.program) {
        this.budget = data;
        if (this.program['details']['budget'] < (this.program['allocated_budget']) + data) {
          const dif = this.program['details']['budget'] - this.program['allocated_budget'];
          this.toaster.warning('warning', `please enter less amount, available budget is ${dif} ${this.program['details']['currency_id']}`);
          this.isFormSumitable = false; console.log(this.isFormSumitable);
        } else {this.isFormSumitable = true; console.log(this.isFormSumitable); }
      }
    });
  }
  getProjectCategories() {
    this.projectservice.getProjectCategories().subscribe(data => {
      this.project_categories = data['data'];
    });
  }
  getProjectById(id) {
    let pro: any;
    for (const category of this.categories) {
      for (const program of category['programs']) {
        pro = program['id'] === id ? program : 'not available';
      }
    }
    return pro;
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
    });
  }
  openClusterForm() {
    this.dialog.open(ClusterComponent, {width: '500px', height: '450px', disableClose: true});
  }
  submit(form) {
    this.projectservice.addProject(form, this.selectedProgram, this.budget);
    //console.log(form);
  }
}
