import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MouseEvent } from '@agm/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { FormsDataService } from '../services/forms-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css']
})
export class LocationDialogComponent implements OnInit {
  latLangForm:FormGroup;
  title:string;
  tableData:any;
  locations:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<LocationDialogComponent> ,private builder:FormBuilder,
              private formDataHttp:FormsDataService,private router:Router) { }

  ngOnInit() {
    this.title=this.data['location-label'];
    this.tableData=this.data['table_data']

    this.latLangForm=this.builder.group({
      'latitude':['',Validators.required],
      'longtude':['',Validators.required]
    })

  }

  save(){
    this.locations=this.latLangForm.get('latitude').value+" "+this.latLangForm.get('longtude').value;
     let json =JSON.parse(this.tableData);
     for(let i=0;i<json.length;i++){
       json[i]['Location']=this.locations;
     }

     this.formDataHttp.store(this.data['id'],JSON.stringify(json))
     .subscribe(data=>{
       setTimeout(() => {
        this.router.navigate(['/auth/custom-forms/form-detail', this.data['id']]);
       }, 1000);
     })
    this.dialogRef.close();
  }
}
