import { GeneratedFormService } from '../services/generated-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GeneratedForm } from '../../models/generateForms';
import { CustomFormsService } from '../custom-forms.service';
import { Forms } from '../../models/forms';
import $ from "jquery";
import { FormsDataService } from '../services/forms-data.service';
import { Columns } from '../../models/columns';
import { FormColumnsService } from '../services/form-columns.service';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.scss']
})
export class AddRecordsComponent implements OnInit {
  private id:number;
  private sub:any;
  generatedForm:Array<GeneratedForm>=[];
  private myForm:Array<Forms>=[];
  private tableData:Array<any>=[];
  private message:string;
  private loading:boolean=false;
  private submited:boolean=false;
  myColumn:Array<Columns>=[];
   columnName:Array<string>=[];
  constructor(private route:ActivatedRoute,private generateHttp:GeneratedFormService,private customForm:CustomFormsService,
    private formDataHttp:FormsDataService,private router:Router,private columnHttp:FormColumnsService,private dialog:MatDialog) { }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params=>{
      this.id= +params['id'];
    });

    this.generateHttp.show(this.id).subscribe(data=>{
      this.generatedForm=data['data'];
    })
    this.customForm.show(this.id).subscribe((data:Array<Forms>)=>{
      this.myForm=data['data'];
    },error=>{
      
    });

    this.columnHttp.show(this.id).subscribe(data=>{
      this.myColumn=data['data'];
      this.columnName= this.myColumn[0].columns.split(',');
    });


    //adading row to table 
    $(document).ready(()=>{
      $(document).on('click','.add-row',function(){
       var columnLength=$(document).find('table>thead>tr>th').length;
       var addeRow=$('<tr><tr>');
       for(var i=0;i<columnLength;i++){
         addeRow.append("<td><input class='table-input'></td>");
       }
       $(document).find('table tbody').append(addeRow);
       $(document).on('click','.add-row',function(){});
      });
     
    });
    //end of adding row to each table 

  }

  saveData(){

    this.loading=true;
    this.submited=true;

    var inputNumber=$(document).find('#dragCopy').find('input[type=text]').length;
    if(inputNumber>0){
      var fileInput=$(document).find('#dragCopy').find('input[type=file]').length;
      if(fileInput>0){

      }else{

        $(document).ready(()=>{
          var inputJSON=[];
          var inputItem={};
          $(document).find('input[type=text],input[type=file],select').each(function(index,item){
            inputItem[$(this).attr('name')]=$(item).val();
           });
           inputJSON.push(inputItem);
           var myJSOn=JSON.stringify(inputJSON);
           this.formDataHttp.store(this.id,myJSOn.toString()).subscribe(data=>{
            
          this.message=data['message'];
           setTimeout(() => {
            this.loading=false;
             this.router.navigate(['/auth/custom-forms/form-detail',this.id]);
           }, 2000);
           }); 
         });
      }
    }else{
      $(document).ready(()=>{
        var fileInput=$(document).find("#dragCopy").find('#table-file-form').length;
        if(fileInput>0){
          var array = [];
        var headers = [];
        
        $('table thead tr th>label').each(function(index, item) {
            headers[index] = $(item).html();
        });
        $('table tr').has('td').each(function() {
            var arrayItem = {};
            $('td>input', $(this)).each(function(index, item) {
                arrayItem[headers[index]] = $(item).val();
            });
            array.push(arrayItem);
        });
        for(var i=0;i<array.length;i++){
          this.tableData.push(array[i]);
        }
        var tableJSON= JSON.stringify(this.tableData);
        var tablesFiles=tableJSON.toString();
        const matDialogConf=new MatDialogConfig();
        matDialogConf.position={
          'top':'0',
          'right':'0'
        };
        matDialogConf.data={
          'title':this.myForm[0].title,
          'id':this.id,
          'table_data':tablesFiles
        }
        matDialogConf.height='100%';
        matDialogConf.width='35%';
        this.dialog.open(FileUploaderComponent,matDialogConf);
        this.loading=false;

        }else{

          var array = [];
        var headers = [];
        
        $('table thead tr th>label').each(function(index, item) {
            headers[index] = $(item).html();
        });
        $('table tr').has('td').each(function() {
            var arrayItem = {};
            $('td>input', $(this)).each(function(index, item) {
                arrayItem[headers[index]] = $(item).val();
            });
            array.push(arrayItem);
        });
        for(var i=0;i<array.length;i++){
          this.tableData.push(array[i]);
        }
        var tableJSON= JSON.stringify(this.tableData);
        this.formDataHttp.store(this.id,tableJSON.toString()).subscribe(data=>{
          
          this.message=data['message'];
          setTimeout(() => {
            this.loading=false;
            this.router.navigate(['/auth/custom-forms/form-detail',this.id]);
          }, 2000);
        });

        }
         });
    }
  
  }

 

}
