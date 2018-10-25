import { Component, OnInit } from '@angular/core';
import {MessageTransporterService} from '../../services/message-transporter.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

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
