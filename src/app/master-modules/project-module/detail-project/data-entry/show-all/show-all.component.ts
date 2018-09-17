import {
  IndicatorFormService
} from '../../log-frame/indicator-tree/services/indicator-form.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Component, OnInit, Inject} from '@angular/core';
import {CustomFormsService} from '../../../../../custom-form/custom-forms.service';
import {FormColumnsService} from '../../../../../custom-form/services/form-columns.service';
import {FormsDataService} from '../../../../../custom-form/services/forms-data.service';
import {Forms} from '../../../../../models/forms';
import {Columns} from '../../../../../models/columns';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {
  indicataorId: number;
  formId: number;
  id: number;
  sub: any;
  myForm: Array<Forms> = [];
  myColumn: Array<Columns> = [];
  columnName: Array<string> = [];
  formDataList: Array<FormData> = [];
  tableRowData: string;
  json: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private dialogConf: MatDialogRef<ShowAllComponent>, private indicatorHttp: IndicatorFormService,
              private customForm: CustomFormsService, private columnsHtpp: FormColumnsService, private formDataHttp: FormsDataService) {
  }

  ngOnInit() {
    this.indicataorId = this.data['indicator_id'];

    this.indicatorHttp.show(this.indicataorId)
      .subscribe(data => {
        this.formId = data['data'][0]['form_id'];

        this.customForm.show(this.formId).subscribe((data: Array<Forms>) => {
          this.myForm = data['data'];
        }, error => {

        });
        this.columnsHtpp.show(this.formId).subscribe(data => {
          this.myColumn = data['data'];
          this.columnName = this.myColumn[0].columns.split(',');
        });

        this.formDataHttp.show(this.formId).subscribe(data => {
          if (data['data'].length > 0) {

            this.formDataList = data['data'];
            this.tableRowData = this.formDataList[0]['data'];
            this.json = JSON.parse(this.tableRowData.toString());
          }
        });


      });
  }

}
