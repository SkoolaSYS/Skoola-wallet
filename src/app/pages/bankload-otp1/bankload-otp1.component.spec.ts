import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadOtp1Component } from './bankload-otp1.component';

describe('BankloadOtp1Component', () => {
  let component: BankloadOtp1Component;
  let fixture: ComponentFixture<BankloadOtp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadOtp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadOtp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
