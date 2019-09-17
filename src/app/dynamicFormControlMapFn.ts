import {MyDynamicCustomFormControlComponent} from "./my-dynamic-custom-form-control/my-dynamic-custom-form-control.component";
import {DynamicFormControl, DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {Type} from "@angular/core";
import {DYNAMIC_FORM_CONTROL_TYPE_TEST} from "./my-dynamic-custom-form-control/model";

export function dynamicFormControlMapFn(model: DynamicFormControlModel): Type<DynamicFormControl> | null {
  switch (model.type) {
    case DYNAMIC_FORM_CONTROL_TYPE_TEST:
      return MyDynamicCustomFormControlComponent;




    default:
      return null;
  }
}
