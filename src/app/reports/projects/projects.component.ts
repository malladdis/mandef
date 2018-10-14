import { ProjectsService } from '../service/projects.service';
import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { OutcomesService } from '../service/outcomes.service';
import { MatExpansionPanel } from '@angular/material';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  //initializing all project
  projects: Array<any> = [];

  //outcome of each projects
  outcomes: Array<any> = [];


   //selected projects
   selectedProject:Array<any>=[];
   step:number=0;
   selectedProjectId:number;
   selected:boolean=false;
   icon: string;
   isDisabled:boolean=true;
   expandArray:Array<any>=[];
  constructor(private projectHttp:ProjectsService,private outcomeHttp:OutcomesService) { }

  ngOnInit() {
    this.projectHttp.index()
    .subscribe(data=>{
      this.projects=data['data'];
      
    });
    this.icon = 'expand_more';

    
  }
  toggleIcon() {
    this.icon = this.icon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }

  projectSelected(id){
    this.selectedProjectId=id;
    this.selected=true;

  }
  showReport(){
  
    this.selectedProject=this.projects.filter((item)=>{
        return item.id=this.selectedProjectId
    });
      
  }

  findAllData(outcomeId){
    this.step=outcomeId;
    
  }

  

}
