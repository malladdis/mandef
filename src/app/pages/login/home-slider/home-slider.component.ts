import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { OuterService } from '../outer.service';
import { Outer } from '../OuterModel';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { MatDialogConfig } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  private outer:Array<Outer>=[];
  constructor(private outerHttp:OuterService,private aboutDialog:MatDialog,private contactDialog:MatDialog) { }

  ngOnInit() {

    
    $(document).ready(()=>{
      var count=0;
      var container=$('.fader');
      var images=['../../../../assets/potato1.jpg','../../../../assets/potato2.jpg'];
      var mainPanel=$('.mainPanel');
      
      container.css('background-image', "url("+images[0]+")");
      this.outerHttp.index()
    .subscribe((data:Array<Outer>)=>{
      this.outer=data;
      mainPanel.html(this.outer[count].html);
    });
      setInterval(()=>{
        container.fadeOut(500,()=>{
          container.css('background-image', "url("+images[count]+")");
          mainPanel.html(this.outer[count].html);
          count++;
          container.fadeIn(500);
        });
        
        if(count==images.length){
          count=0;
        }
      },10000);
    });
  }


  openAboutDialog(){
    const aboutConf=new MatDialogConfig();
    aboutConf.width="60%";
    aboutConf.height="100%;"
    aboutConf.position={
      'top':'10px'
    }
    this.aboutDialog.open(AboutUsComponent,aboutConf);
  }

  openContactDialog(){
    const contactConf=new MatDialogConfig();
    contactConf.width="60%";
    contactConf.height="60%";
    contactConf.position={
      'top':'10px'
    }
    this.contactDialog.open(ContactUsComponent,contactConf);
  }

  openWhatWeDoDialog(){

  }

}
