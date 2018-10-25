import { Component, OnInit } from '@angular/core';
import {MessageTransporterService} from '../../services/message-transporter.service';

@Component({
  selector: 'app-drop-down-design',
  templateUrl: './drop-down-design.component.html',
  styleUrls: ['./drop-down-design.component.scss']
})
export class DropDownDesignComponent implements OnInit {

  questionTitle:  string;
  data: Array<any>  = [];
  constructor(private message:  MessageTransporterService) { }

  ngOnInit() {
    this.questionTitle  = this.message.getQuestionTitle();
    this.data = this.message.getData();
    console.log(this.message.getQuestionTitle());
  }

}
