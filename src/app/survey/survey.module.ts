import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { ShowSurveyComponent } from './show-survey/show-survey.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { QuestionTitleComponent } from './question-title/question-title.component';
import { MultipleChoiceDesignComponent } from './designed-questions/multiple-choice-design/multiple-choice-design.component';
import { DropDownDesignComponent } from './designed-questions/drop-down-design/drop-down-design.component';
import { InformationAcceptorComponent } from './information-acceptor/information-acceptor.component';
import { SingleChoiceComponent } from './designed-questions/single-choice/single-choice.component';
import { SingleTextboxComponent } from './designed-questions/single-textbox/single-textbox.component';
import { CommentBoxComponent } from './designed-questions/comment-box/comment-box.component';

const surveyRoute: Routes =  [

  {
    path: 'new-survey',
    component:  NewSurveyComponent
  },

  {
    path: 'survey-question/:id',
    component:  SurveyQuestionComponent
  },

  {
    path: 'show-survey',
    component:  ShowSurveyComponent
  }

];
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(surveyRoute)
  ],
  declarations: [NewSurveyComponent, ShowSurveyComponent, SurveyQuestionComponent, QuestionTitleComponent,
     MultipleChoiceDesignComponent, DropDownDesignComponent, InformationAcceptorComponent, SingleChoiceComponent, SingleTextboxComponent, CommentBoxComponent],
  entryComponents:  [MultipleChoiceDesignComponent, DropDownDesignComponent,  SingleChoiceComponent,  SingleTextboxComponent, CommentBoxComponent]
})
export class SurveyModule { }
