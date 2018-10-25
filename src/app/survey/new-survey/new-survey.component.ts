import { Component, OnInit } from '@angular/core';
import { SurveyCategoryService } from '../services/survey-category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SurveyService } from '../services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit {
  surveyCategory: Array<any>  = [];
  surveyForm: FormGroup;
  loading: boolean = false;
  constructor(private surveyCategoryHttp: SurveyCategoryService,  private builder:  FormBuilder,  private surveyHttp: SurveyService,
              private router: Router) { }

  ngOnInit() {
    //  building survey form
    this.surveyForm = this.builder.group({
      'title':  ['',  Validators.required],
      'survey_category_id': ['', Validators.required],
      'description':  ['']
    })
    this.surveyCategoryHttp.index()
    .subscribe(data =>  {
      this.surveyCategory =  data['data'];
    });
  }

  storeSurvey() {
    this.loading  = true;
    this.surveyHttp.store(this.surveyForm.get('title').value, this.surveyForm.get('survey_category_id').value, this.surveyForm.get('description').value)
    .subscribe(data =>  {

      if(data['status'] === true) {
        setTimeout(() => {
          this.loading  = false;
          this.router.navigate(['/auth/surveys/survey-question',data['data']['id']]);
        }, 1000);
      }
    });
  }

}
