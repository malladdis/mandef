import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-indicator-tree',
  templateUrl: './indicator-tree.component.html',
  styleUrls: ['./indicator-tree.component.scss']
})
export class IndicatorTreeComponent implements OnInit {
  @Input() indicator: any;
  constructor() { }

  ngOnInit() {
  }

}
