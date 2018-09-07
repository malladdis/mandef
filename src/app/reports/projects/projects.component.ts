import { ProjectsService } from '../service/projects.service';
import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { OutcomesService } from '../service/outcomes.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    //initializing all project
    projects:Array<any>=[];

    //outcome of each projects
   outcomes:Array<any>=[];
  constructor(private projectHttp:ProjectsService,private outcomeHttp:OutcomesService) { }

  ngOnInit() {
    this.projectHttp.index()
    .subscribe(data=>{
      this.projects=data['data'];
      this.outcomes=this.projects[0]['outcomes'];
       
        //let's find outputs of each outcome
        for(var i=0;i<this.outcomes.length;i++){
            this.outcomeHttp.show(this.outcomes[i]['id'])
            .subscribe(data=>{
                this.outcomes=data['data']; 
            })
        }
    });

    $(document).ready(function(){
      var pressed = false;
      var start = undefined;
      var startX, startWidth;
  
      $("table th").mousedown(function(e) {
          start = $(this);
          pressed = true;
          startX = e.pageX;
          startWidth = $(this).width();
          $(start).addClass("resizing");
          $(start).addClass("noSelect");
          $(start).css('cursor','col-resize');
      });
  
      $(document).mousemove(function(e) {
          if(pressed) {
              $(start).width(startWidth+(e.pageX-startX));
          }
      });
  
      $(document).mouseup(function() {
          if(pressed) {
              $(start).removeClass("resizing");
              $(start).removeClass("noSelect");
              pressed = false;
          }
      });
   

    });
  }

  getOutCome(projectId){
     var outcome=this.outcomes.filter((obj)=>obj['project_id'] === projectId);
     return outcome;
      
  }

  print(){
    let popupWinindow
        let innerContents = document.getElementById("printable-div").innerHTML;
        let css=""
        popupWinindow = window.open('', '_blank');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style>.table>thead{text-align:left}.table>thead > tr > th,tbody>tr>td{text-algin:left;border:1px solid #ddd;}</style></head><body onload="window.print()"><h2>List of programmes</h2><br>' + innerContents + '</html>');
        popupWinindow.document.close();
  }

  tableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'vita_programmes.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
  }

}
