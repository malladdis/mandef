import {ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {DonorService} from '../donor.service';
import {ToasterNotificationService} from '../../../services/toaster-notification.service';
export const   template = '      <p>\n' +
  '        <mat-form-field class="one-third-width">\n' +
  '          <input type="text" matInput placeholder="contact-type">\n' +
  '        </mat-form-field>\n' +
  '        <mat-form-field class="one-third-width">\n' +
  '          <input type="text" matInput placeholder="contact-value">\n' +
  '        </mat-form-field>\n' +
  '        <button type="button" mat-icon-button class="hover-red">\n' +
  '          <mat-icon>clear</mat-icon>\n' +
  '        </button>\n' +
  '      </p>';
@Component({
  selector: 'app-add-donor-dialog',
  templateUrl: './add-donor-dialog.component.html',
  styleUrls: ['./add-donor-dialog.component.scss']
})
export class AddDonorDialogComponent implements OnInit {
  htmlContact: SafeHtml;
  inputList = [];
  constructor(
    private donorService: DonorService,
    private toaster: ToasterNotificationService
  ) { }

  ngOnInit() {
  }

  addRow() {
    this.inputList.push(
      {
        name: '',
        value: '',
      }
    );
  }
  removerRow(i) {
    console.log(i);
    this.inputList.splice(i, 1);
  }

  addDonor(form) {
    console.log(this.inputList);
    console.log(form.value);
    let contact = '{';
    for (let arr of this.inputList) {
        contact += '"' + `${arr['name']}` + '":' + '"' + `${arr['value']}` + '",';
    }
    contact = contact.substring(0, contact.lastIndexOf(',')) + '}';
     console.log(contact);
     this.donorService.addDonor(form.value.name, contact).subscribe(res => {
       form.resetForm();
       this.toaster.success('success', res['message']);
     });
  }
}
