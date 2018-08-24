import { Component, OnInit } from '@angular/core';
import { CustomFormsService } from '../custom-forms.service';
import { Forms } from '../../models/forms';

@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.scss']
})
export class ShowFormsComponent implements OnInit {
  private forms:Array<Forms>=[];
  constructor(private form:CustomFormsService) { }

  ngOnInit() {
    this.form.index().subscribe((data:Array<Forms>)=>{
      this.forms=data['data'];
    });
  
  }

}
