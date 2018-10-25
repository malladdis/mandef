import { Injectable } from '@angular/core';
import {Type} from '@angular/core/src/type';

@Injectable({
  providedIn: 'root'
})
export class MessageTransporterService {
    questionTitle:  string;
    data: Array<any>  = [];
    formControlNames: string;
    placeholder:  string;
  constructor() { }
  getQuestionTitle(): string  {
    return this.questionTitle;
  }
  setQuestiontitle(title: string) {
    this.questionTitle = title;
  }
  getData() {
    return this.data;
  }
  setData(datas: Array<any>) {
    this.data = datas;
  }
  getFormName(){
    return this.formControlNames;
  }
  setFormName(name: string){
    this.formControlNames = name;
  }
  setPlaceholder(placeholders:  string)  {
    this.placeholder  = placeholders;
  }
  getPlaceholder(){
    return this.placeholder;
  }
}
