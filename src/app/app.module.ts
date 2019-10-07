import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Type} from '@angular/core';

import { AppComponent } from './app.component';
import { BasicUsageComponent } from './basic-usage/basic-usage.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DynamicFormsNGBootstrapUIModule} from "@ng-dynamic-forms/ui-ng-bootstrap";
import { FormGroupsComponent } from './form-groups/form-groups.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FormArraysComponent } from './form-arrays/form-arrays.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormControlEventsComponent } from './form-control-events/form-control-events.component';
import { MyDynamicCustomFormControlComponent } from './my-dynamic-custom-form-control/my-dynamic-custom-form-control.component';
import {DYNAMIC_FORM_CONTROL_MAP_FN} from "@ng-dynamic-forms/core";
import {dynamicFormControlMapFn} from "./dynamicFormControlMapFn";
import {MyCustomFormControlComponent} from "./my-costum-form-control/my-custom-form-control.component";
import { AccTestComponent } from './acc-test/acc-test.component';





@NgModule({
  declarations: [
    AppComponent,
    BasicUsageComponent,
    FormGroupsComponent,
    FormArraysComponent,
    FormLayoutsComponent,
    FormControlEventsComponent,
    MyCustomFormControlComponent,
    MyDynamicCustomFormControlComponent,
    AccTestComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    NgbModule.forRoot()
  ],
  providers: [  {
    provide: DYNAMIC_FORM_CONTROL_MAP_FN,
    useValue: dynamicFormControlMapFn
  },
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyDynamicCustomFormControlComponent]
})
export class AppModule { }
