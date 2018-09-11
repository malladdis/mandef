import { FrequenciesService } from './services/frequencies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Frequency } from '../../../../models/frequency';
import { th } from 'fontawesome';
import { DataEntryService } from './services/data-entry.service';
import { DataEntryIndicator } from '../../../../models/dataEntryIndicator';
import { IndicatorService } from '../log-frame/indicator-tree/services/indicator.service';
import { PeriodsService } from './services/periods.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
projectId:any;
private frequencies:Array<Frequency>=[];
private frequenciesWithIndicator:Array<any>=[];
  constructor(private route: ActivatedRoute,private frequencyHttp:FrequenciesService,private dataEntryHttp:DataEntryService,
              private indicatorHttp:IndicatorService,private periodsHttp:PeriodsService,private http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId=params['id'];
      console.log(this.projectId);
      });

      this.frequencyHttp.index()
      .subscribe(data=>{
        this.frequencies=data['data'];
        this.frequencies.splice(0,1);
        this.changeFrequency(this.frequencies[0].id);
      });

      
  }

  changeFrequency(id){
    this.frequenciesWithIndicator.splice(0,this.frequenciesWithIndicator.length);
    this.frequencyHttp.show(id)
    .subscribe(data=>{
      this.frequenciesWithIndicator=data['data'];
    });
    
  }

  getQuarter(d,f){
    var date=new Date(d);
    var month=date.getMonth()+1;
    if(month<4){
      return "Q1 "+date.getFullYear();
    }else if(month>3&&month<7){
      return "Q2 "+date.getFullYear();
    }else if(month>6&&month<10){
      return "Q3 "+date.getFullYear();
    }else if(month>9){
      return "Q4 "+date.getFullYear();
    }
  }

}
