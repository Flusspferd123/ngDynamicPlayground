import {
  DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
  DynamicFormModel,
  DynamicInputModel,
  DynamicTextAreaModel
} from "@ng-dynamic-forms/core";

export const RELATED_FORMS_MODEL: DynamicFormModel = [

  new DynamicInputModel({

    id: "sampleInput1",
    label: "Sample Input 1",
    maxLength: 3,
    placeholder: "Sample input",
    inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER
  }),
  new DynamicTextAreaModel(
    {
      id: "myTextArea",
      label: "My Textarea",
      /*      relations: [
              {
                match: MATCH_DISABLED,
                when: [
                  { id: "mySelect", value: "option-3" }
                ]
              }
            ]*/
    }
  )
]
