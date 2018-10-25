import {DialogBodyComponent} from '../dialog-body/dialog-body.component';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, ViewChild, OnDestroy, AfterViewInit} from '@angular/core';
import {CustomFormsService} from '../custom-forms.service';
import {FormSectionsService} from '../form-sections.service';
import {FormSections} from '../../models/sections';
import {printError} from 'ts-node';
import {event, json, lab} from 'd3';
import {FormColumnsService} from '../services/form-columns.service';
import {GeneratedFormService} from '../services/generated-form.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {ElementRef} from '@angular/core';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
import $ from 'jquery';
import {Forms} from '../../models/forms';
import {CustomformErrorComponent} from '../customform-error/customform-error.component';
import {MatDialogConfig} from '@angular/material';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css']
})
export class FormDesignComponent implements OnInit, OnDestroy, AfterViewInit {
  copyForm = FormGroup;
  title: string;
  id: number;
  mesage: string = '<p class="fa fa-font"><h3>Text</h3></p>';

  sub: any;
  sections: Array<FormSections> = [];
  columnName: Array<any> = [];
  generatedHtml: string;
  status: boolean = false;
  forms: Array<Forms> = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private http: CustomFormsService, private sectionsHttp: FormSectionsService, private element: ElementRef,
              private formColumnApi: FormColumnsService, private generatedFormApi: GeneratedFormService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.show(this.id).subscribe(data => {

      this.forms = data['data'];
      console.log(this.forms[0].title);
    }, error => {

    });

    this.sectionsHttp.index().subscribe(data => {
      this.sections = data['data'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    //jquery starts here
    $(document).ready(() => {

      $(document).find('#dragCopy').css('border', '1px solid gray');//start adding border for dragcopy element after document loaded

      //handling hover effect for each elements
      $(document).on('mouseenter', 'div#holder', function () {
        $(this).css('border', '1px solid gray');
        $(this).find('p').css('display', 'block');
      });

      $(document).on('mouseleave', 'div#holder', function () {
        $(this).css('border', 'none');
        $(this).find('p').css('display', 'none');
      });
      $(document).on('click', 'div>p>span.remove', function () {
        $(this).parent().parent().remove();
      });
      //end of handling hover effect


      //handling of Text started here
      $('#drag1').bind('dragstart', function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'copy';

        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
      });

      $(document).on('click', 'div>label.editable', function () {
        var $lbl = $(this), o = $lbl.text(),
          $txt = $('<input style="width:70%;padding:10px;" type="text" class="editable-label-text" value="' + o + '" />').css('font-size', '20px').css('padding', '10px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              var no = $(this).val();
              $lbl.text(no);
              $txt.replaceWith($lbl);
            }
          });
      }); //end of handling text


      //handling custom inputs started here
      $('#input-drager').bind('dragstart', function (e) {

        e.originalEvent.dataTransfer.effectAllowed = 'copy';
        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));

      });

      $(document).on('click', '.input-holder>div>label#input-label', function () {
        var $lbl = $(this), o = $lbl.text(),
          $txt = $('<input style="width:70%;padding:10px;" type="text"  class="editable-label-text" value="' + o + '" />').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              var no = $(this).val();
              $lbl.text(no);
              $(this).parent().find('input').attr('formControlName', no.replace(/ /g, ''));
              $(this).parent().find('input').attr('placeholder', no);
              $(this).parent().find('input').attr('name', no);
              $(document).find('#hiden-file-label').text(no);
              $txt.replaceWith($lbl);
            }
          });
      });
      //end of handling custom inputs


      //message drager startes here
      $('#message-drager').bind('dragstart', function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'copy';

        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
      });


      $(document).on('click', 'div>label.message-editable', function () {
        let $lbl = $(this), o = $lbl.text(),
          $txt = $('<textarea type="text" rows="20" cols="40" class="editable-label-text" value="' + o + '" ></textarea>').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              let no = $(this).val();
              $lbl.text(no);
              $txt.replaceWith($lbl);
            }
          });
      });
      //message drager ends here

      //link started here
      $('#link-drager').bind('dragstart', function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'copy';

        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
      });
      $(document).on('click', 'div>label.link-editable', function () {
        var $lbl = $(this), o = $lbl.text(),
          $txt = $('<input style="width:70%;padding:10px;" type="text"  class="editable-label-text" value="' + o + '">').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              let no = $(this).val();
              let anchor = $('<a style="font-size:17px;" (click)="navigateLink(' + no + ')" target=_blank>' + no + '</a>');
              $lbl.text(no);
              $txt.replaceWith(anchor);
            }
          });
      });

      //end of link address

      //drop down menu stared here
      $('#dropDown-drager').bind('dragstart', function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'copy';
        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
      });
      $(document).on('click', '#addDropDownOption', function () {

        let $lbl = $(this), o = $lbl.text(),
          $txt = $('<input style="width:70%;padding:10px;" type="text"  class="editable-label-text" value="' + o + '" ></textarea>').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              var no = $(this).val();
              $(document).find('#dropDown').append('<option>' + no + '</option>');
              $txt.replaceWith($lbl);
            }
          });
      });

      $(document).on('click', '#select-label', function () {
        var $lbl = $(this), o = $lbl.text(),
          $txt = $('<input style="width:70%;padding:10px;" class="editable-label-text" value="' + o + '" ></textarea>').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              var no = $(this).val();
              $(this).parent().find('#dropDown').append($('<option>', {
                value: 1,
                text: 'select ' + no
              })).attr('name', no).attr('formControlName', no.replace(/ /g, ''));
              $lbl.text(no);
              $txt.replaceWith($lbl);
            }
          });
      });

      $(document).on('mouseenter', '#dropHolder', function () {
        $(this).css('border', '1px solid gray');
        $(this).find('p').css('display', 'block');
      });

      $(document).on('mouseleave', '#dropHolder', function () {
        $(this).css('border', 'none');
        $(this).find('#dropDown-editor').css('display', 'none');
      });
      $(document).on('click', '#dropHolder>p>span.remove', function () {
        $(this).parent().parent().remove();
      });
      //end of drop down menu

      //handling textarea started here
      $('#textarea-drager').bind('dragstart', function (e) {

        e.originalEvent.dataTransfer.effectAllowed = 'copy';
        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));

      });
      $(document).on('click', '#holder>div>label#textarea-label', function () {
        let $lbl = $(this), o = $lbl.text(),
          $txt = $('<input style="width:70%;padding:10px;" type="text"  class="editable-label-text" value="' + o + '" />').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              let no = $(this).val();
              $lbl.text(no);
              $(this).parent().find('textarea').attr('formControlName', no.replace(/ /g, ''));
              $(this).parent().find('textarea').attr('name', no);
              $(this).parent().find('textarea').attr('placeholder', no);
              $txt.replaceWith($lbl);
            }
          });
      });
      //end of handling textarea ends here

//handling file started
      $('#file-drager').bind('dragstart', function (e) {
        e.originalEvent.dataTransfer.effectAllowed = 'copy';

        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));
      });

      $(document).on('mouseenter', '#fileHolder', function () {
        $(this).css('border', '1px solid gray');
        $(this).find('p').css('display', 'block');
      });

      $(document).on('mouseleave', '#fileHolder', function () {
        $(this).css('border', 'none');
        $(this).find('#dropDown-editor').css('display', 'none');
      });
      $(document).on('click', '#holder>p>span.remove', function () {
        $(this).parent().parent().remove();
      });

      $(document).on('click', '#holder>div>label#file-label', function () {
        let $lbl = $(this), o = $lbl.text(),
          $txt = $('<input type="text"  class="editable-label-text" value="' + o + '" />').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              let no = $(this).val();
              $lbl.text(no);
              $(this).parent().find('input').attr('formControlName', no.replace(/ /g, ''));
              $(document).find('#dragCopy').attr('file', 'true');
              $(document).find('#dragCopy').attr('file-label', no);
              $(document).find('#hiden-file-label').text(no);
              $txt.replaceWith($lbl);
            }
          });
      });
//end of file handling

      //location handling started
      $('#location-drager').bind('dragstart', function (e) {

        e.originalEvent.dataTransfer.effectAllowed = 'copy';
        e.originalEvent.dataTransfer.setData('Text', $(this).attr('data'));

      });

      $(document).on('click', 'div>label.location-editable', function () {
        var $lbl = $(this), o = $lbl.text(),
          $txt = $('<input style="width:70%;padding:10px;" type="text"  class="editable-label-text" value="' + o + '"/>').css('font-size', '17px');
        $lbl
          .replaceWith($txt);
        $txt.focus();

        $txt.blur(function () {
          $txt.replaceWith($lbl);
        })
          .keydown(function (evt) {
            if (evt.keyCode == 13) {
              var no = $(this).val();
              $lbl.text(no);
              $(document).find('#dragCopy').attr('location', 'true');
              $(document).find('#dragCopy').attr('location-label', no);
              $txt.replaceWith($lbl);
            }
          });
      });
      //end of location handling


      //drop starts  here
      $('#dragCopy').bind('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let elementType = e.originalEvent.dataTransfer.getData('Text');
        if (elementType.indexOf('type=\'file\'') > 0) {
          $(document).find('#dragCopy>div.dragCopy-file').remove();
        }
        $(this).append($(e.originalEvent.dataTransfer.getData('Text')));
        $('#dragCopy').animate({scrollTop: $(document).find('#dragCopy').height()}, 'fast');
        return false;
      }).bind('dragover', false);
      //drop ends here

    });//end of jquery
  }

  inputKeyUp() {
  }

  save() {
    this.loading = true;
    $(document).ready(() => {
      var inputNumber = $(document).find('#dragCopy').find('input[type=text]').length;
      if (inputNumber > 0) {
        $(document).find('#dragCopy').unwrap();
        $(document).find('#addDropDownOption').remove();
        $(document).find('#dropDown-editor').remove();
        $(document).find('#label-editor').remove();
        $(document).find('#holder').css('border', 'none');
        $(document).find('#fileHolder').css('border', 'none');
        $(document).find('#hiden-file-label').css('display', 'block');

        //finding each input type name for our column creation of form builder
        let json = [];
        $(document).find('#dragCopy>div>div#form-group').find('input[type=text],input[type=file],select,textarea').each(function () {
          let name = $(this).attr('name');
          json.push(name);
          console.log(json);
        });
        for (let i = 0; i < json.length; i++) {
          this.columnName.push(json[i]);
        }
        //saving generated forms
        $(document).find('.file-form').remove();
        $(document).find('.location-form').remove();
        this.generatedHtml = $(document).find('#dragCopy').wrap('<p/>').parent().html().toString();
        this.generatedFormApi.store(this.id, this.generatedHtml)
          .subscribe(data => {
            if (data) {
              //saving table columns after saving generated form
              this.formColumnApi.store(this.id, this.columnName.toString())
                .subscribe(data => {
                  this.loading = false;
                  this.router.navigate(['/auth/custom-forms/form-detail', this.id]);
                });
              //end of saving generated form
            }

          });
      } else {

        $(document).find('#dragCopy').unwrap();
        $(document).find('#addDropDownOption').remove();
        $(document).find('#dropDown-editor').remove();
        $(document).find('#label-editor').remove();
        $(document).find('#holder').css('border', 'none');
        $(document).find('#fileHolder').css('border', 'none');
        $(document).find('#hiden-file-label').css('display', 'block');
        $(document).find('#file-label').remove();

        //finding each input type name for our column creation of form builder
        let json = [];
        $(document).find('#dragCopy>div>div#form-group').find('input[type=text],input[type=file],select,textarea').each(function () {
          let name = $(this).attr('name');
          json.push(name);
          console.log(json);
        });
        for (let i = 0; i < json.length; i++) {
          this.columnName.push(json[i]);
        }
        //saving generated forms
        this.generatedHtml = $(document).find('#dragCopy').wrap('<p/>').parent().html().toString();
        this.generatedFormApi.store(this.id, this.generatedHtml)
          .subscribe(data => {
            if (data) {
              //saving table columns after saving generated form
              this.formColumnApi.store(this.id, this.columnName.toString())
                .subscribe(data => {
                  this.loading = false;
                  this.router.navigate(['/auth/custom-forms/form-detail', this.id]);
                });
              //end of saving generated form
            }

          });

      }

    });
    //end of finding columns
  }

  showDialogse() {
    console.log('Show dialog');
  }

  fileSelected(event) {
    console.log('event');
  }

}
