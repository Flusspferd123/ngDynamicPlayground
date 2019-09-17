import {Component, OnInit} from '@angular/core';
import {DynamicFormControlModel, DynamicFormLayout, DynamicFormModel, DynamicFormService} from "@ng-dynamic-forms/core";
import {FormGroup} from "@angular/forms";
import {FORM_LAYOUT_MODEL, MY_FORM_LAYOUT} from "./model";

@Component({
  selector: 'app-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.css']
})
export class FormLayoutsComponent implements OnInit {
  formModel: DynamicFormControlModel[] = FORM_LAYOUT_MODEL as DynamicFormControlModel[];
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = MY_FORM_LAYOUT;

  constructor(private formService: DynamicFormService) {
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel)
  }

}
