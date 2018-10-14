import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  @Input() files;
  columns = ['No', 'Name', 'Tag', 'Date', 'User', ' '];
  constructor() {
  }

  ngOnInit() {
  }

}
