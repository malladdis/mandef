import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { CustomFormsService } from '../custom-forms.service';
import { FormSectionsService } from '../form-sections.service';
import { FormSections } from '../../models/sections';
import { printError } from 'ts-node';
import { event, json, lab } from 'd3';
import { FormColumnsService } from '../services/form-columns.service';
import { GeneratedFormService } from '../services/generated-form.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import $ from "jquery";
import { Forms } from '../../models/forms';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css']
})
export class FormDesignComponent implements OnInit,OnDestroy,AfterViewInit {
  private copyForm=FormGroup;
  title:string;
  private id:number;
  mesage:string='<p class="fa fa-font"><h3>Text</h3></p>';
  private sub:any;
  private sections:Array<FormSections>=[];
  private columnName:Array<any>=[];
  private generatedHtml:string;
  private status:boolean=false;
  private forms:Array<Forms>=[];
  constructor(private route:ActivatedRoute,private http:CustomFormsService,private sectionsHttp:FormSectionsService,private element:ElementRef,
  private formColumnApi:FormColumnsService,private generatedFormApi:GeneratedFormService,private router:Router) { 
  }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params=>{
      this.id= +params['id'];
    });
    this.http.show(this.id).subscribe(data=>{
      
      this.forms=data['data'];
      console.log(this.forms[0].title);
    },error=>{

    });

    this.sectionsHttp.index().subscribe(data=>{
     this.sections= data['data'];
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  ngAfterViewInit(){
    //jquery starts here
    $(document).ready(function(){

      $('#drag1').bind('dragstart', function(e) {
        e.originalEvent.dataTransfer.effectAllowed = 'copy';
        
        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
    });
   

  $('#input-drager').bind('dragstart', function(e) {
    e.originalEvent.dataTransfer.effectAllowed = 'copy';
    
    e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});
$('#table-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});

  //label development started

  //editing label on click of label in jquery
  $(document).find('#dragCopy').css('border','1px solid gray');
  $(document).on('click', "div>label.editable", function() { 	
    var $lbl = $(this), o = $lbl.text(),
     $txt = $('<input type="text" class="editable-label-text" value="'+o+'" />').css('font-size',"20px").css('padding','10px');
   $lbl
   .replaceWith($txt);
   $txt.focus();
   
   $txt.blur(function() {
     $txt.replaceWith($lbl);
   })
   .keydown(function(evt){
     if(evt.keyCode == 13) {
       var no = $(this).val();
       $lbl.text(no);
       $txt.replaceWith($lbl);
     }
   }); 
}); //end of label editing

$(document).on('click', "table>thead>tr>th>label", function() { 	
  var $lbl = $(this), o = $lbl.text(),
  $txt = $('<input type="text"  class="editable-label-text" value="'+o+'" />').css('font-size',"20px").css('padding','10px');

$lbl
.replaceWith($txt);
$txt.focus();

$txt.blur(function() {
  $txt.replaceWith($lbl);
})
.keydown(function(evt){
  if(evt.keyCode == 13) {
    var no = $(this).val();
    $lbl.text(no);
    $txt.replaceWith($lbl);
  }
});
}); //end of label editing

//mouse enter and leave for label
$(document).on('mouseenter','div#holder',function(){
  $(this).css('border','1px solid gray');
  $(this).find('p').css('display','block');
});

$(document).on('mouseleave','div#holder',function(){
  $(this).css('border','none');
  $(this).find('p').css('display','none');
});
$(document).on('click','div>p>span.remove',function(){
$(this).parent().parent().remove();
});

//end of label development

//input handling starts here
$(document).on('keyup','#dragCopy>input',function(){
  var text=$(this).val();
  $(this).attr('placeholder',text);
  $(this).attr('name',text);
  $(this).attr('formControlName',text.replace(/ /g,''));
});
//end of input handling


//table handling starts

$(document).on('click','.add-column',function(){
  $('#customers>thead>tr').append("<th><label>Column name</label><span class='remove-column'>x</span></th>");
  $('#customers>tbody>tr').append("<td><input class='table-input'></td>");
 });
 

$(document).on('click','.remove-column',function(){
  var col = $(this).parent().index()+1;
  $(document).find('table th:nth-child('+col+')').remove();
  $(document).find('table td:nth-child('+col+')').remove();
});

$(document).on('click','.remove-table',function(){
  $(this).parent().parent().remove();
});

$(document).on('click','.attach-file',function(){
  $(this).css('display','none');
  $(document).find('#table-file-form').css('display','block');
});

$(document).on('click','#remove-file-attachment',function(){
  $(document).find('#table-file-form').css('display','none');
  $(document).find('.attach-file').css('display','inline-block');
})
//end of table handling


//message drager startes here
$('#message-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});


$(document).on('click', "div>p.message-editable", function() { 	
  var $lbl = $(this), o = $lbl.text(),
   $txt = $('<textarea type="text" rows="20" cols="40" class="editable-label-text" value="'+o+'" ></textarea>').css('font-size','17px');
 $lbl
 .replaceWith($txt);
 $txt.focus();
 
 $txt.blur(function() {
   $txt.replaceWith($lbl);
 })
 .keydown(function(evt){
   if(evt.keyCode == 13) {
     var no = $(this).val();
     $lbl.text(no);
     $txt.replaceWith($lbl);
   }
 }); 
});
//message drager ends here

//link started here
$('#link-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});
//end of link address

//drop down menu stared here
$('#dropDown-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});
$(document).on('click','#addDropDownOption',function(){

  var $lbl = $(this), o = $lbl.text(),
   $txt = $('<input type="text"  class="editable-label-text" value="'+o+'" ></textarea>').css('font-size','17px');
 $lbl
 .replaceWith($txt);
 $txt.focus();
 
 $txt.blur(function() {
   $txt.replaceWith($lbl);
 })
 .keydown(function(evt){
   if(evt.keyCode == 13) {
     var no = $(this).val();
     $(document).find('#dropDown').append('<option>'+no+'</option>');
     $txt.replaceWith($lbl);
   }
 });
});

$(document).on('click','#select-label',function(){
  var $lbl = $(this), o = $lbl.text(),
   $txt = $('<input  class="editable-label-text" value="'+o+'" ></textarea>').css('font-size','17px');
 $lbl
 .replaceWith($txt);
 $txt.focus();
 
 $txt.blur(function() {
   $txt.replaceWith($lbl);
 })
 .keydown(function(evt){
   if(evt.keyCode == 13) {
     var no = $(this).val();
     $(this).parent().find('#dropDown').append($('<option>', {
      value: 1,
      text: 'select '+no
  })).attr('name',no).attr('formControlName',no.replace(/ /g,''));
     $lbl.text(no);
     $txt.replaceWith($lbl);
   }
 });
});

$(document).on('mouseenter','#dropHolder',function(){
  $(this).css('border','1px solid gray');
  $(this).find('p').css('display','block');
});

$(document).on('mouseleave','#dropHolder',function(){
  $(this).css('border','none');
  $(this).find('#dropDown-editor').css('display','none');
});
$(document).on('click','#dropHolder>p>span.remove',function(){
$(this).parent().parent().remove();
});
//end of drop down menu

//handling file started
$('#file-drager').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  
  e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
});

$(document).on('mouseenter','#fileHolder',function(){
  $(this).css('border','1px solid gray');
  $(this).find('p').css('display','block');
});

$(document).on('mouseleave','#fileHolder',function(){
  $(this).css('border','none');
  $(this).find('#dropDown-editor').css('display','none');
});
$(document).on('click','#fileHolder>p>span.remove',function(){
$(this).parent().parent().remove();
});

$(document).on('click','#fileHolder>label#file-label',function(){
  var $lbl = $(this), o = $lbl.text(),
   $txt = $('<input type="text"  class="editable-label-text" value="'+o+'" />').css('font-size','17px');
 $lbl
 .replaceWith($txt);
 $txt.focus();
 
 $txt.blur(function() {
   $txt.replaceWith($lbl);
 })
 .keydown(function(evt){
   if(evt.keyCode == 13) {
     var no = $(this).val();
     $lbl.text(no);
     $(this).parent().find('input').attr('name',no);
     $(this).parent().find('input').attr('formControlName',no.replace(/ /g,''));
     $(document).find('#hiden-file-label').text(no);
     $txt.replaceWith($lbl);
   }
 });
});

//end of file handling



//drop starts  here
$('#dragCopy').bind('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).append($(e.originalEvent.dataTransfer.getData('Text')));
  return false;
}).bind('dragover', false);

//drop ends here


  });//end of jquery
}

 inputKeyUp(){
 }

save(){
 
  //console.log(this.element.nativeElement.querySelector('#dragCopy').toString);
  
    $(document).ready(()=>{

  var result=$(document).find('#dragCopy').find('div>table');
  if(result.length<=0){
    
    $(document).find('#select-label').remove();
    $(document).find('#file-label').remove();
    $(document).find('#dragCopy').unwrap();
    $(document).find('#addDropDownOption').remove();
    $(document).find('#dropDown-editor').remove();
    $(document).find('#label-editor').remove();
    $(document).find('#holder').css('border','none');
    $(document).find('#fileHolder').css('border','none');
    $(document).find('#hiden-file-label').css('display','block');
    //finding each input type name for our column creation of form builder
      var json=[];
      $(document).find('#dragCopy').find('input[type=text],input[type=file],select').each(function(){
        var name= $(this).attr('name');
        json.push(name); 
      });
      for(var i=0;i<json.length;i++){
        this.columnName.push(json[i]);
      }
        //saving generated forms
        this.generatedHtml= $(document).find('#dragCopy').wrap('<p/>').parent().html().toString();
    this.generatedFormApi.store(this.id,this.generatedHtml)
    .subscribe(data=>{
    if(data){
      //saving table columns after saving generated form
      this.formColumnApi.store(this.id,this.columnName.toString())
      .subscribe(data=>{
        this.router.navigate(['/auth/custom-forms/form-detail',this.id]);
      });
    //end of saving generated form
    }
    
    });
    }else if(result.length>0){
      $(document).find('.attach-file').remove();
      $(document).find('.add-column').remove();
      $(document).find('.remove-column').remove();
      $(document).find('.remove-table').remove();
      $(document).find('#label-editor').remove();
      $(document).find('#dragCopy').css('border','none');
      $(document).find('#remove-file-attachment').remove();
      if($(document).find('#table-file-form').css('display')=='none'){
        $(document).find('#table-file-form').remove();
      }
      var tableColmnName=[];
      var table=$(document).find('#dragCopy').find('div>table>thead>tr>th').each(function(){
        var label=$(this).text();
        tableColmnName.push(label);
      });
      for(var i=0;i<tableColmnName.length;i++){
        this.columnName.push(tableColmnName[i]);
      }
      if($(document).find('.add-column').length<=0){
        $(document).find('.table-btn-holder').append("<button id='success' class='fa fa-plus add-row'>Add row</button>");
        this.generatedHtml= $(document).find('#dragCopy').wrap('<p/>').parent().html().toString();
        this.generatedFormApi.store(this.id,this.generatedHtml)
        .subscribe(data=>{
         if(data){
           //saving table columns after saving generated form
          this.formColumnApi.store(this.id,this.columnName.toString())
          .subscribe(data=>{
            this.router.navigate(['/auth/custom-forms/form-detail',this.id]);
          });
        //end of saving generated form
         }
        
        });
      }
     }else{
  
     }

    });
    //end of finding columns
}
}
