import { Component, OnInit } from '@angular/core';
import {
  DynamicFormControlModel,
  DynamicFormGroupModel,
  DynamicFormModel,
  DynamicFormService, DynamicInputModel
} from "@ng-dynamic-forms/core";
import {MY_FORM_MODEL} from "./model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-groups',
  templateUrl: './form-groups.component.html',
  styleUrls: ['./form-groups.component.css']
})
export class FormGroupsComponent implements OnInit {
  formModel: DynamicFormControlModel[] = MY_FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  addFormGroupControl() {

    const addableFormModel: DynamicFormGroupModel=  new DynamicFormGroupModel({

      id: "fullName",
      legend: "Name",
      group: [
        new DynamicInputModel({

          id: "firstName",
          label: "First Name"
        }),
        new DynamicInputModel({

          id: "lastName",
          label: "Last Name"
        })
      ]
    });

    // params: Angular form group, existing dynamic formModel, new form dynamic
    this.formService.addFormGroupControl( this.formGroup, this.formModel, addableFormModel )
  }
}
