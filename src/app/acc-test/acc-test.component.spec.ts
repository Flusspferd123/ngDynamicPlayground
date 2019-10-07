import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccTestComponent } from './acc-test.component';

describe('AccTestComponent', () => {
  let component: AccTestComponent;
  let fixture: ComponentFixture<AccTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
