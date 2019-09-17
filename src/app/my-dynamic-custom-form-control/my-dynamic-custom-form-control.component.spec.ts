import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamicCustomFormControlComponent } from './my-dynamic-custom-form-control.component';

describe('MyDynamicCustomFormControlComponent', () => {
  let component: MyDynamicCustomFormControlComponent;
  let fixture: ComponentFixture<MyDynamicCustomFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDynamicCustomFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDynamicCustomFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
