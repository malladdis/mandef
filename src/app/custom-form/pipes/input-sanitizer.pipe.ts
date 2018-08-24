import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'inputSanitizer'
})
export class InputSanitizerPipe implements PipeTransform {
   constructor(private sanitize:DomSanitizer){}
  transform(value: any, args?: any): any {
    return this.sanitize.bypassSecurityTrustHtml(value);
  }

}
