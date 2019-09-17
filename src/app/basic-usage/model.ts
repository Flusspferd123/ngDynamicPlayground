import {
  DynamicFormModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicFormControlModel,
  DynamicColorPickerModel,
  DynamicSliderModel,
  DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER
} from "@ng-dynamic-forms/core";

export const BASIC_USAGE_MODEL: DynamicFormModel = [

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
  }),

  new DynamicRadioGroupModel<string>({

    id: "sampleRadioGroup",
    label: "Sample Radio Group",
    options: [
      {
        label: "Option 1",
        value: "option-1",
      },
      {
        label: "Option 2",
        value: "option-2"
      },
      {
        label: "Option 3",
        value: "option-3"
      }
    ],
    value: "option-3"
  }),

  new DynamicCheckboxModel({

    id: "sampleCheckbox",
    label: "I do agree"
  })
];
