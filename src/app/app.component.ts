import { Component } from '@angular/core';
import {ToasterConfig} from 'angular5-toaster/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public toasterConfig: ToasterConfig = new ToasterConfig({
    animation: 'flyLeft',
    showCloseButton: true,
    timeout: 2000,
    mouseoverTimerStop: false,
    positionClass: 'toast-top-center'
  });
}
