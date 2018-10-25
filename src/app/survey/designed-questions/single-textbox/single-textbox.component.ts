import { Component, OnInit } from '@angular/core';
import {MessageTransporterService} from '../../services/message-transporter.service';

@Component({
  selector: 'app-single-textbox',
  templateUrl: './single-textbox.component.html',
  styleUrls: ['./single-textbox.component.scss']
})
export class SingleTextboxComponent implements OnInit {

  questionTitle:  string;
  data: Array<any>  = [];
  placeholder:  string;
  constructor(private message:  MessageTransporterService) { }

  ngOnInit() {
    this.placeholder  = this.message.getPlaceholder();
    this.questionTitle  = this.message.getQuestionTitle();
    this.data = this.message.getData();
  }

}
