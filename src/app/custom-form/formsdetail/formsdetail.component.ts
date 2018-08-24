import { AppService } from '../../services/app.service';
import { CustomFormsService } from '../custom-forms.service';
import { Forms } from '../../models/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Columns } from '../../models/columns';
import { FormColumnsService } from '../services/form-columns.service';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';
import { FormsDataService } from '../services/forms-data.service';
import { FormData } from '../../models/formData';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-formsdetail',
  templateUrl: './formsdetail.component.html',
  styleUrls: ['./formsdetail.component.scss']
})
export class FormsdetailComponent implements OnInit {
  private id:number;
  private sub:any;
  private myForm:Array<Forms>=[];
   myColumn:Array<Columns>=[];
   columnName:Array<string>=[];
   formDataList:Array<FormData>=[];
   tableRowData:string;
   json:any;
  constructor(private route:ActivatedRoute,private customForm:CustomFormsService,private columnsHtpp:FormColumnsService,private dialog:MatDialog,
            private formDataHttp:FormsDataService) {
   }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params=>{
      this.id= +params['id'];
    });
    this.customForm.show(this.id).subscribe((data:Array<Forms>)=>{
      this.myForm=data['data'];
    },error=>{
      
    });
    this.columnsHtpp.show(this.id).subscribe(data=>{
      this.myColumn=data['data'];
     this.columnName= this.myColumn[0].columns.split(',');
    });

    this.formDataHttp.show(this.id).subscribe(data=>{
      this.formDataList=data['data'];
      this.tableRowData=this.formDataList[0]['data'];
      this.json=JSON.parse(this.tableRowData.toString());
    });
    
  }

  openShareDialog(){
    const matDialogConf=new MatDialogConfig();
    matDialogConf.position={
      'top':'0',
      'right':'0'
    };
    matDialogConf.data={
      'title':this.myForm[0].title,
      'id':this.id
    }
    matDialogConf.height='100%';
    matDialogConf.width='35%';
    this.dialog.open(ShareDialogComponent,matDialogConf);
  }

}
