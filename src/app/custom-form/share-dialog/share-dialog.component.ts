import {Forms} from '../../models/forms';
import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Form, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../master-modules/project-module/project.service';
import {Project} from '../../models/project';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/users';
import { SharedFormService } from '../services/shared-form.service';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {
  shareForm: FormGroup;
  options: string[] = ['Meseret', 'Ezedin', 'Lule'];
  projects: string[] = [];
  projectData: Array<Project>;
  userData: Array<User>;
  selectedProjects: number[] = [];
  selectedUsers: number[] = [];
  errorMessage: string;
  formTitle:string="";
  formId:number;
  loading:boolean=false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogref: MatDialogRef<ShareDialogComponent>, private formbuilder: FormBuilder, private projectHttp: ProjectService, private userHttp: UsersService,
             private sharedFormHttp:SharedFormService) {
  }

  ngOnInit() {
    this.shareForm = this.formbuilder.group({
      users: [''],
      projects: [''],
    });
    this.formTitle=this.data['title'];
    this.formId=this.data['id'];

    this.projectHttp.index().subscribe(data => {
      this.projectData = data['data'];
    });

    this.userHttp.index().subscribe((data: Array<User>) => {
      this.userData = data;
     
    });
  }

  close() {
    this.dialogref.close();
  }


  projectSelected(id) {
    this.selectedProjects.push(id);
  }

  userSelected(id) {
    this.selectedUsers.push(id);
  }

  save() {
    if (this.selectedUsers.length <= 0) {
      this.errorMessage = 'Please select at least one user or project to share this form';
    }else{
      this.loading=true;
      let count=0;
      for(let i=0;i<this.selectedUsers.length;i++){
        this.sharedFormHttp.store(this.selectedUsers[i],this.formId)
        .subscribe(data=>{
          if(data['status']===true){
            count++;
          }
          if(count==this.selectedUsers.length){
            setTimeout(() => {
              this.dialogref.close();
              this.loading=false;
            }, 2000);
          }
        });
        
      }
    }
  }

}
