import { Forms } from '../../models/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../master-modules/project-module/project.service';
import { Project } from '../../models/project';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {
  shareForm:FormGroup;
  options: string[] = ['Meseret', 'Ezedin', 'Lule'];
  projects: string[]=[];
  private projectData:Array<Project>;
  private userData:Array<User>;
  private selectedProjects:number[]=[];
  private selectedUsers:number[]=[];
  private errorMessage:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string
  ,private dialogref:MatDialogRef<ShareDialogComponent>,private formbuilder:FormBuilder,private projectHttp:ProjectService,private userHttp:UsersService) { }

  ngOnInit() {
    this.shareForm=this.formbuilder.group({
      users:[''],
      projects:[''],
    });

    this.projectHttp.index().subscribe(data=>{
      this.projectData=data['data'];
    });

    this.userHttp.index().subscribe((data:Array<User>)=>{
      this.userData=data;
      console.log(this.userData);
    })
  }

  close(){
    this.dialogref.close();
  }
  

  projectSelected(id){
    this.selectedProjects.push(id);
  }

  userSelected(id){
    this.selectedUsers.push(id);
  }

  save(){
    if(this.selectedProjects.length<=0&&this.selectedUsers.length<=0){
      this.errorMessage="Please select at least one user or project to share this form";
    }
    console.log(this.selectedProjects);
  }

}
