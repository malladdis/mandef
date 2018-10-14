import {GeneratedFormService} from '../services/generated-form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {GeneratedForm} from '../../models/generateForms';
import {CustomFormsService} from '../custom-forms.service';
import {Forms} from '../../models/forms';
import $ from 'jquery';
import {FormsDataService} from '../services/forms-data.service';
import {Columns} from '../../models/columns';
import {FormColumnsService} from '../services/form-columns.service';
import {FileUploaderComponent} from '../file-uploader/file-uploader.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { LocationDialogComponent } from '../location-dialog/location-dialog.component';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.scss']
})
export class AddRecordsComponent implements OnInit {
  id: number;
  sub: any;
  generatedForm: Array<GeneratedForm> = [];
  myForm: Array<Forms> = [];
  tableData: Array<any> = [];
  message: string;
  loading: boolean = false;
  submited: boolean = false;
  myColumn: Array<Columns> = [];
  columnName: Array<string> = [];
  fileLabelName:string;
  locationLabelName:string;
  changed:boolean=false;
  constructor(private route: ActivatedRoute, private generateHttp: GeneratedFormService, private customForm: CustomFormsService,
              private formDataHttp: FormsDataService, private router: Router, private columnHttp: FormColumnsService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.generateHttp.show(this.id).subscribe(data => {
      this.generatedForm = data['data'];
    });
    this.customForm.show(this.id).subscribe((data: Array<Forms>) => {
      this.myForm = data['data'];
    }, error => {

    });

    this.columnHttp.show(this.id).subscribe(data => {
      this.myColumn = data['data'];
      this.columnName = this.myColumn[0].columns.split(',');
    });
  
   

  }

  saveData() {

    $(document).ready(()=>{
      let file= $(document).find("#dragCopy").attr('file');
      let location=$(document).find("#dragCopy").attr('location');
     
      if(location==='true' && file ===undefined){

        this.locationLabelName=$(document).find("#dragCopy").attr("location-label");
        this.locationDialog();

      }else if(location===undefined && file==='true'){

          this.fileLabelName=$(document).find("#dragCopy").attr("file-label");
          this.fileExist();

      }else if(location===undefined && file===undefined){

        this.fileNotExist();

      }else if(location==='true' && file==='true'){

      }
      
    })
    

      //handling forms data only
     /*  var fileInput = $(document).find('#dragCopy').find('input[type=file]').length;
      if (fileInput > 0) {
        $(document).ready(() => {
          var inputJSON = [];
          var inputItem = {};
          $(document).find('input[type=text],input[type=file],select').each(function (index, item) {
            if($(this).attr('name')=='files'){
              this.selectedFile = <File>$(item).val();
              inputItem[$(this).attr('name')] = $(item).val();
              console.log(this.selectedFile.name);
            }else{
              inputItem[$(this).attr('name')] = $(item).val();
            }
          });
          inputJSON.push(inputItem);
          var myJSOn = JSON.stringify(inputJSON);
          //console.log(this.selectedFile.name)
          this.formDataHttp.store(this.id, myJSOn.toString(),'true').subscribe(data => {

            this.message = data['message'];
            setTimeout(() => {
              this.loading = false;
              this.router.navigate(['/auth/custom-forms/form-detail', this.id]);
            }, 2000);
          });

          $(document).ready(()=>{
            let file= $(document).find("#dragCopy").attr('file');
            if(typeof file !== undefined && file !== false){
              console.log('file exists');
              console.log($(document).find('#dragCopy').attr("file-label"));
            }else{
              console.log('file not exist')
            }
          })
          
        });

      } else {
        $(document).ready(() => {
          var inputJSON = [];
          var inputItem = {};
          $(document).find('input[type=text],input[type=file],select').each(function (index, item) {
            inputItem[$(this).attr('name')] = $(item).val();
          });
          inputJSON.push(inputItem);
          var myJSOn = JSON.stringify(inputJSON);
          console.log(myJSOn)
          this.formDataHttp.store(this.id, myJSOn.toString(),'false').subscribe(data => {

            this.message = data['message'];
            setTimeout(() => {
              this.loading = false;
              this.router.navigate(['/auth/custom-forms/form-detail', this.id]);
            }, 2000);
          });
        });
      } */
      //end of handling forms data

    

  }

  fileExist(){
    console.log("file exist");
    $(document).ready(() => {
      var inputJSON = [];
      var inputItem = {};
      $(document).find('input[type=text],input[type=file],select').each(function (index, item) {
        inputItem[$(this).attr('name')] = $(item).val();
      });
      inputJSON.push(inputItem);
      var myJSOn = JSON.stringify(inputJSON);
      console.log(this.fileLabelName);
      const dialogConf=new MatDialogConfig();
      dialogConf.data={
        'file-label':this.fileLabelName,
        'id':this.id,
        'title':this.myForm['title'],
        'table_data':myJSOn
      };
      dialogConf.position={
        top:'50px'
      }
      dialogConf.width="40%";

      this.dialog.open(FileUploaderComponent,dialogConf);
      

    });
    

  }

  fileNotExist(){
    console.log("File not exist")
    $(document).ready(() => {
      var inputJSON = [];
      var inputItem = {};
      $(document).find('input[type=text],input[type=file],select').each(function (index, item) {
        inputItem[$(this).attr('name')] = $(item).val();
      });
      inputJSON.push(inputItem);
      var myJSOn = JSON.stringify(inputJSON);
      this.formDataHttp.store(this.id, myJSOn.toString()).subscribe(data => {

        this.message = data['message'];
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/auth/custom-forms/form-detail', this.id]);
        }, 2000);
      });
    });
  }

  locationDialog(){
    
    $(document).ready(() => {
      var inputJSON = [];
      var inputItem = {};
      $(document).find('input[type=text],input[type=file],select').each(function (index, item) {
        inputItem[$(this).attr('name')] = $(item).val();
      });
      inputJSON.push(inputItem);
      var myJSOn = JSON.stringify(inputJSON);
      const dialogConf=new MatDialogConfig();
      dialogConf.data={
        'location-label':this.locationLabelName,
        'id':this.id,
        'title':this.myForm['title'],
        'table_data':myJSOn
      };

      this.dialog.open(LocationDialogComponent,dialogConf);
      
    });
  }


}