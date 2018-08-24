import { Component, OnInit, forwardRef, ViewChild, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatInput } from '@angular/material';
export interface Tag {
  id: number;
  text: string;
}

export function arrayDiffObj(s: any[], v: any[], key: string) {
      let reducedIds = v.map((o) => o[key]);
      return s.filter((obj: any) => reducedIds.indexOf(obj[key]) === -1);
  };

const CUSTOM_INPUT_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ChipsTagComponent),
  multi: true
};
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChipsTagComponent),
  multi: true
};
@Component({
  selector: 'app-chips-tag',
  templateUrl: './chips-tag.component.html',
  styleUrls: ['./chips-tag.component.scss']
})
export class ChipsTagComponent implements ControlValueAccessor {

  @ViewChild('chipInput') chipInput: MatInput;

  @Input() source: Tag[] = [];
  @Input() _value: Tag[] = [];
  get value(): Tag[] { return this._value; }
  set value(v: Tag[]) {
      this._value = v;
      this.onChange(this._value);
  }

  onChange = (_: any): void => {
      // mock
  }
  onTouched = (_: any): void => {
      // mock
  }

  writeValue(v: Tag[]): void {
      this._value = v;
  }

  sourceFiltered(): Tag[] {
      return arrayDiffObj(this.source, this._value, 'id');
  }

  registerOnChange(fn: (_: any) => void ): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  validate(c: FormControl): any {
      return (this._value) ? undefined : {
          tinyError: {
              valid: false
          }
      };
  }

  add(event: MatAutocompleteSelectedEvent): void {
      const t: Tag = event.option.value;
      this._value.push(t);
      this.value = this._value;
      this.chipInput['nativeElement'].blur();
  }

  addNew(input: MatInput): void {
      // create a tmp id for interaction until the api has assigned a new one
      const newId: number = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
      const newTag: Tag = {id: newId, text: input.value};
      this._value.push(newTag);
      this.value = this._value;
      this.chipInput['nativeElement'].value = '';
      this.source.push(newTag);
  }

  remove(tag: Tag): void {
      this._value = this._value.filter((i: Tag) => i.id !== tag.id);
      this.value = this._value;
      this.chipInput['nativeElement'].blur();
  }

  displayFn(value: any): string {
      return value && typeof value === 'object' ? value.text : value;
  }

}
