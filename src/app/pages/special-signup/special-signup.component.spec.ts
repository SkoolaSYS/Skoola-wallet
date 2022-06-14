import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSignupComponent } from './special-signup.component';

describe('SpecialSignupComponent', () => {
  let component: SpecialSignupComponent;
  let fixture: ComponentFixture<SpecialSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
