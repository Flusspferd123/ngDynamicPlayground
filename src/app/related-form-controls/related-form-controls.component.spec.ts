import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedFormControlsComponent } from './related-form-controls.component';

describe('RelatedFormControlsComponent', () => {
  let component: RelatedFormControlsComponent;
  let fixture: ComponentFixture<RelatedFormControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedFormControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
