import {
  DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
  DynamicFormModel,
  DynamicInputControlModel,
  DynamicInputModel
} from "@ng-dynamic-forms/core";

export const FORM_LAYOUT_MODEL: DynamicFormModel = [
  new DynamicInputModel({

    id: "sampleInput1",
    label: "Sample Input 1",
    maxLength: 3,
    placeholder: "Sample input",
    inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER
  }),

  new DynamicInputModel({

    id: "sampleInput2",
    label: "Sample Input 2",
    maxLength: 42,
    placeholder: "Sample input"
  })
]


export const MY_FORM_LAYOUT = {

  "sampleInput1": {

    element: {
      label: "control-label"
    },
    grid: {
      group: 'form-row'
    }
  },

  "sampleInput2": {

    element: {
      label: "control-label"
    },
    grid: {
      control: "col-sm-9",
      label: "col-sm-3"
    }
  }
};
