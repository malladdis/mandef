import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  public showLoader:boolean = false;
  public sales = [
      {
        companyIcon:'../../../assets/europe.png',
        companyName:' European Kingdom',
        star:'20',
        fork: false,
        watch: false,
      },
      {
        companyIcon:'../../../assets/afd.jpg',
        companyName:'Action For Development',
        star:'2k',
        fork: false,
        watch: false,
      },
      {
        companyIcon:'../../../assets/amref.png',
        companyName:'AMeREF Health Africa',
        star:false,
        fork: false,
        watch: 22,
      },
      {
        companyIcon:'../../../assets/ide.jpg',
        companyName:'IDE',
        star:false,
        watch: false,
        fork: '22',
      }
  ]
  constructor() { }

  ngOnInit() {
  }

  reload() {
      this.showLoader = true;
      setTimeout(() => {
          this.showLoader = false;
      },2000)
  }

}
