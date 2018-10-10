import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css']
})
export class LocationDialogComponent implements OnInit {
  title: string;
  lat: number = 9.1450;
  lng: number = 40.4897;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.title=this.data['location-label'];

  }
}
