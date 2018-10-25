import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms';
import {MessageTransporterService} from '../services/message-transporter.service';
import {MultipleChoiceDesignComponent} from '../designed-questions/multiple-choice-design/multiple-choice-design.component';
import {SingleChoiceComponent} from '../designed-questions/single-choice/single-choice.component';
import {DropDownDesignComponent} from '../designed-questions/drop-down-design/drop-down-design.component';
import {SingleTextboxComponent} from '../designed-questions/single-textbox/single-textbox.component';
import {CommentBoxComponent} from '../designed-questions/comment-box/comment-box.component';
@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit {
  surveys: Array<any> = [];
  sub: any;
  id: number;
  type: string;
  placeholders: string;
  questionType: Array<any> = [
    {
      id: 1,
      name: 'Multiple choice',
      placeholder:  'Enter an answer choice'
    },
    {
      id: 2,
      name: 'Single choice',
      placeholder:  'Enter an answer choice'
    },
    {
      id: 3,
      name: 'Drop down',
      placeholder:  'Enter Drop down items'
    },
    {
      id: 4,
      name: 'Single Textbox',
      placeholder:  ''
    },
    {
      id: 5,
      name: 'Comment box',
      placeholder:  ''
    },
    {
      id: 6,
      name: 'Contact information',
      placeholder:  ''
    },
    {
      id: 7,
      name: 'Date and time',
      placeholder:  ''
    }
  ];

  questionForm: FormGroup;
  viewNewQuestionDesigner = true;
  viewQuestionBuilder = false;
  viewDesignedQuestion  = false;
  questionTitle:  string;
  questionNumber = 1;
  questionTypeId  = 0;
  @ViewChild('container', {read: ViewContainerRef})  container:  ViewContainerRef;
  constructor(private surveyHttp: SurveyService, private active: ActivatedRoute,  private builder:  FormBuilder,
              private componentFactory: ComponentFactoryResolver, private messenger: MessageTransporterService) {
  }

  ngOnInit() {

    this.initializeForm();
    //  finding survey id
    this.sub = this.active.params.subscribe(params => {
      this.id = +params['id'];
    });


    //  let's find a survey tha needs to be designed a question
    this.surveyHttp.show(this.id)
      .subscribe(data => {
        this.surveys = data['data'];
      });


  }

  typeSelected(ids: number, name: string, placehodler:  string) {
      this.viewNewQuestionDesigner = false;
      this.viewQuestionBuilder = true;
      this.questionTitle  = `${this.questionNumber}, ${this.questionForm.get('question').value}`;
      this.questionNumber++;
      this.questionTypeId = ids;
      this.type = name;
      this.placeholders  = placehodler;
  }

  getData(data: any)  {
    this.messenger.setQuestiontitle(this.questionTitle);
    this.messenger.setData(data[0]['data']);
    this.viewDesignedQuestion = true;
    this.initializeForm();
    this.viewNewQuestionDesigner = true;
    this.viewQuestionBuilder = false;
    switch (data[0]['type'])  {
      case 'Multiple choice' :
        this.addComponent(MultipleChoiceDesignComponent);
        break;
      case 'Single choice' :
        this.addComponent(SingleChoiceComponent);
        break;
      case 'Drop down'  :
        this.addComponent(DropDownDesignComponent);
        break;
      case 'Single Textbox'  :
        this.addComponent(SingleTextboxComponent);
        break;
      case 'Comment box' :
        this.addComponent(CommentBoxComponent);
        break;
    }

  }

  addComponent(component: Type<any>)  {
    const factory = this.componentFactory.resolveComponentFactory(component);
    this.container.createComponent(factory);
  }
  initializeForm()  {
    this.questionForm = this.builder.group({
      question: ['', Validators.required]
    });
  }
  saveInput() {
    console.log(this.container.get(2).toString());
  }
}
