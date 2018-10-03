import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (this.isPhoto(value)) {
      return 'Photo';
    }
    return value;
  }

  isPhoto(value): boolean {
    return value === 'jpg' || value === 'png' || value === 'jpeg' || value === 'tif' || value === 'gif';
  }
}
