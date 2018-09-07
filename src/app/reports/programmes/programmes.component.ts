import { ProgrammesService } from '../service/programmes.service';
import { Component, OnInit } from '@angular/core';
import { ProgramCategoryService } from '../service/program-category.service';


@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss']
})
export class ProgrammesComponent implements OnInit {
  private program:Array<any>=[];
  private categories:Array<any>=[];
  constructor(private programHttp:ProgrammesService,private programCategoryHttp:ProgramCategoryService) { }

  ngOnInit() {

    this.programCategoryHttp.index()
    .subscribe(data=>{
      this.categories=data['data'];
      
    })
    this.programHttp.index()
    .subscribe(data=>{
      this.program=data['data'];
     
    });
   
  }

  categoriesName(id){
    var name =this.categories.filter((obj) => obj['id'] === id);
    return name[0]['name'];
  }

  year(year){
   var date=new Date(year);
   return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
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
