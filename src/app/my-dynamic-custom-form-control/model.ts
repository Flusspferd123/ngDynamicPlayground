/*
export const MODEL_TYPE = 'myModel'


export const jsonModel =  [

  {
    "type": "RADIO_GROUP",
    "id": "sampleRadioGroup",
    "label": "Sample Radio Group",
    "options": [
      {
        "label": "Option 1",
        "value": "option-1",
      },
      {
        "label": "Option 2",
        "value": "option-2"
      },
      {
        "label": "Option 3",
        "value": "option-3"
      }
    ],
    "value": "option-3"
  },
  {
    "type": "CHECKBOX",
    "id": "sampleCheckbox",
    "label": "I do agree"
  }
]
*/

import {
  AUTOCOMPLETE_OFF,
  DynamicFormControlLayout, DynamicInputModel,
  DynamicInputModelConfig,
  serializable
} from '@ng-dynamic-forms/core';

export const DYNAMIC_FORM_CONTROL_TYPE_TEST = 'TEST_TYPE';

export const TEST_FORM_LAYOUT = {

  granted: {
    element: {
      container: 'custom-control custom-checkbox pl-1',
      control: 'custom-control-input',
      label: 'custom-control-label pt-1'
    }
  }
};

export interface TestModelConfig extends DynamicInputModelConfig {

  maxOptions?: number;
  value?: any;
}

export class TestModel extends DynamicInputModel {

  @serializable() maxOptions: number;
  @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_TEST;

  constructor(config: TestModelConfig, layout?: DynamicFormControlLayout) {

    super(config, layout);

    this.autoComplete = AUTOCOMPLETE_OFF;

    this.maxOptions = config.maxOptions || 100;
  }

}

