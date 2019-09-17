import { Component, OnInit } from '@angular/core';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from "@ng-dynamic-forms/core";
import {MY_FORM_MODEL} from "./model";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-arrays',
  templateUrl: './form-arrays.component.html',
  styleUrls: ['./form-arrays.component.css']
})
export class FormArraysComponent implements OnInit {
  formModel: DynamicFormControlModel[] = MY_FORM_MODEL as DynamicFormControlModel[];
  formGroup: FormGroup;
  private formArrayControl: FormArray;
  private formArrayModel: DynamicFormArrayModel;

  private testString: string;


  constructor(private formService: DynamicFormService)  { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formArrayControl = this.formGroup.get('myFormArray') as FormArray;
    this.formArrayModel = this.formService.findById('myFormArray', this.formModel) as DynamicFormArrayModel;
    this.testString = 'This is a test';
  }

  addItem() {
    this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
  }

  clear() {
    this.formService.clearFormArray(this.formArrayControl, this.formArrayModel);
  }

  removeInput(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.formArrayControl, context);

  }
}
