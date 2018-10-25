import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-information-acceptor',
  templateUrl: './information-acceptor.component.html',
  styleUrls: ['./information-acceptor.component.scss']
})
export class InformationAcceptorComponent implements OnInit {
  @Output() sendData  = new EventEmitter();
  @Input()  type;
  @Input()  placeholder;
  data: Array<any>;
  formData: Array<any> =  [];
  inputNumber: Array<any> = [];
  constructor() { }

  ngOnInit() {
    for (let i =  0;  i < 3;  i++) {
      this.inputNumber.push(i);
    }
  }

  addMore() {
    this.inputNumber.push(1);
  }
  saveInput(events) {
    console.log(events.target.value);
  }

  saveQuestion()  {
    this.data = [
      {
        type: this.type,
        data: this.formData
      }
    ];
    this.sendData.emit(this.data);
  }

  inputValue(id,  value) {
    const inputs = {
      'id':   id,
      value:  value
    };
    this.formData.push(inputs);
    console.log(this.formData);
  }

  commentValue(id,  value)  {
    console.log(value);
  }

}
