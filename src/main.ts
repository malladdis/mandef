import 'hammerjs';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator) {
    if (environment.production) {
	  enableProdMode();
	  navigator.serviceWorker.register('ngsw-worker.js');
	}
  }
}).catch(err => console.log(err));
