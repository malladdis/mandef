import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {AuthService} from './services/auth.service';
import {AppService} from './services/app.service';
import {TokenService} from './services/token.service';
import {BeforeLoginService} from './services/before-login.service';
import {AfterLoginService} from './services/after-login.service';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AppService,
    TokenService,
    BeforeLoginService,
    AfterLoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
