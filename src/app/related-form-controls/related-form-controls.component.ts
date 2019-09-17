import { Component, OnInit } from '@angular/core';
import { DynamicFormControlModel, DynamicFormModel, DynamicFormService } from "@ng-dynamic-forms/core";
import { FormGroup } from "@angular/forms";
import { RELATED_FORMS_MODEL } from "./Model/relatedModel";

@Component({
  selector: 'app-related-form-controls',
  templateUrl: './related-form-controls.component.html',
  styleUrls: ['./related-form-controls.component.css']
})
export class RelatedFormControlsComponent implements OnInit {
  formGroup: FormGroup;
  formModel: DynamicFormControlModel[] = RELATED_FORMS_MODEL as DynamicFormControlModel[];

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
