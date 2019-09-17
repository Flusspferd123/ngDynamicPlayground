import {
  DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
  DynamicFormModel,
  DynamicInputControlModel,
  DynamicInputModel
} from "@ng-dynamic-forms/core";

export const FORM__MODEL_FOR_EVENTS: DynamicFormModel = [
  new DynamicInputModel({

    id: "sampleInputA",
    label: "Sample Input A",
    maxLength: 3,
    placeholder: "Sample input",
    inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER
  }),

  new DynamicInputModel({

    id: "sampleInputB",
    label: "Sample Input B",
    maxLength: 42,
    placeholder: "Sample input"
  })
]


