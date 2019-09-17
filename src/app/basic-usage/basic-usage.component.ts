import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BASIC_USAGE_MODEL} from "./model";
import {DynamicFormControlModel, DynamicFormModel, DynamicFormService} from "@ng-dynamic-forms/core";

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.css']
})
export class BasicUsageComponent implements OnInit {
  formModel: DynamicFormControlModel[] = BASIC_USAGE_MODEL as DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
