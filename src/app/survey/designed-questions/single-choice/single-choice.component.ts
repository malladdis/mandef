import { Component, OnInit } from '@angular/core';
import {MessageTransporterService} from '../../services/message-transporter.service';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
  questionTitle:  string;
  data: Array<any>  = [];
  constructor(private message:  MessageTransporterService) { }

  ngOnInit() {
    this.questionTitle  = this.message.getQuestionTitle();
    this.data = this.message.getData();
    console.log(this.message.getQuestionTitle());
  }

}
