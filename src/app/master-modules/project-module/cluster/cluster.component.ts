import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatTreeNestedDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ProjectService } from '../project.service';
export interface Pokemon {
  value: string;
  viewValue: string;
}

export interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit {
  @ViewChild('addCluster') addClusterDirective;
  addClusterForm: FormGroup;
  woredas: Array<Object> = [];
  zones: Array<Object> = [];
  constructor(public dialogRef: MatDialogRef<ClusterComponent>,
    private fb: FormBuilder,
    private projectservice: ProjectService) {
    this.createForm();
    this.addClusterForm.get('zone').valueChanges.subscribe(data => {
        this.projectservice.getWoredas().subscribe(response => {
            this.woredas = response['data'];
            console.log(response);
        });
    });
  }

  ngOnInit() {
    this.projectservice.getZones().subscribe(data => {
      this.zones = data['data'];
    });
  }
  createForm() {
    this.addClusterForm = this.fb.group({
      zone: '',
      name: '',
      kebele: ''
    });
    console.log(this.addClusterForm);
  }
  submit(form) {
    this.projectservice.addCluster(form);
  }
}
