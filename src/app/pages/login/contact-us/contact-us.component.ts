import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private dialogref:MatDialogRef<ContactUsComponent>) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialogref.close();
  }

}
