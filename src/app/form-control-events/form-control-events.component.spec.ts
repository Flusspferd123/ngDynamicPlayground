import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlEventsComponent } from './form-control-events.component';

describe('FormControlEventsComponent', () => {
  let component: FormControlEventsComponent;
  let fixture: ComponentFixture<FormControlEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
