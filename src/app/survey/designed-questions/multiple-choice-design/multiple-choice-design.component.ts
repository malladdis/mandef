import { Component, OnInit } from '@angular/core';
import {MessageTransporterService} from '../../services/message-transporter.service';

@Component({
  selector: 'app-multiple-choice-design',
  templateUrl: './multiple-choice-design.component.html',
  styleUrls: ['./multiple-choice-design.component.scss']
})
export class MultipleChoiceDesignComponent implements OnInit {
  questionTitle:  string;
  data: Array<any>  = [];
  constructor(private message:  MessageTransporterService) { }

  ngOnInit() {
    this.questionTitle  = this.message.getQuestionTitle();
    this.data = this.message.getData();
    console.log(this.message.getQuestionTitle());
  }

}
