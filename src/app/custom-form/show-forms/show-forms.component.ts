import {Component, OnInit} from '@angular/core';
import {CustomFormsService} from '../custom-forms.service';
import {Forms} from '../../models/forms';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { SharedUsersComponent } from '../shared-users/shared-users.component';
import { ConfirmService } from '../services/confirm.service';

@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.scss']
})
export class ShowFormsComponent implements OnInit {
  forms: Array<Forms> = [];
  
  constructor(private form: CustomFormsService,private dialog:MatDialog,private confirm:ConfirmService) {
  }

  ngOnInit() {
    this.form.index().subscribe((data: Array<Forms>) => {
      this.forms = data['data'];
    });

  }

  removeForm(formdata,id){

   this.confirm.confirm("Confirmation message","Are you sure you want to delete "+formdata['title'])
   .subscribe(data=>{
     if(data==true){
      let index=this.forms.indexOf(formdata);
      this.forms.splice(index,1);
      this.form.delete(id)
      .subscribe(data=>{
       console.log(data['message']);
      })
     }
   })
   
  }

  openShareDialog(form){
    const matDialogConf=new MatDialogConfig();
    matDialogConf.data={
      'title':form['title'],
      'id':form['id']
    }
    matDialogConf.height='90%';
    matDialogConf.width='35%';
    this.dialog.open(ShareDialogComponent,matDialogConf);
  }

  openSharedUsersDialog(form){
    const matDialogConf=new MatDialogConfig();
    matDialogConf.data={
      'form':form
    }
    matDialogConf.height='90%';
    matDialogConf.width='70%';
    this.dialog.open(SharedUsersComponent,matDialogConf);

  }

}
