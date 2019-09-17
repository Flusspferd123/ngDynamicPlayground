import { Component, OnInit } from '@angular/core';
import {
  DynamicFormControlEvent,
  DynamicFormControlModel,
  DynamicFormModel,
  DynamicFormService
} from "@ng-dynamic-forms/core";
import {FormGroup} from "@angular/forms";
import {FORM__MODEL_FOR_EVENTS} from "./model";

@Component({
  selector: 'app-form-control-events',
  templateUrl: './form-control-events.component.html',
  styleUrls: ['./form-control-events.component.css']
})
export class FormControlEventsComponent implements OnInit {
  formGroup: FormGroup;
  formModel = FORM__MODEL_FOR_EVENTS as DynamicFormControlModel[];




  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onChange($event: DynamicFormControlEvent) {
    console.log('onChange() value: ', $event.control.value)

  }

  onNgbEvent($event: DynamicFormControlEvent) {
    console.log('onNgbEvent()', $event);

  }
}
