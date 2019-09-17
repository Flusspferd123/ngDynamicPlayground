import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  DynamicFormControlComponent,
  DynamicFormControlCustomEvent, DynamicFormControlModel,
  DynamicFormLayout,
  DynamicFormLayoutService, DynamicFormService,
  DynamicFormValidationService,
} from "@ng-dynamic-forms/core";


import {MyCustomFormControlComponent} from "../my-costum-form-control/my-custom-form-control.component";
import {TestModel} from "./model";



@Component({
  selector: "my-dynamic-custom-form-control",
  templateUrl: "./my-dynamic-custom-form-control.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyDynamicCustomFormControlComponent extends DynamicFormControlComponent implements OnInit{

  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: TestModel;/* corresponding DynamicFormControlModel */

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();

  // This is the costum form control
  @ViewChild(MyCustomFormControlComponent) myCustomFormControlComponent: MyCustomFormControlComponent;

  constructor(protected layoutService: DynamicFormLayoutService,
              protected validationService: DynamicFormValidationService,
              private formService: DynamicFormService) {

    super(layoutService, validationService);

  }

  ngOnInit(): void {
    // this.model = this.formService.fromJSON(jsonModel);
    //this.group = this.formService.createFormGroup(this.model)
  }
}
