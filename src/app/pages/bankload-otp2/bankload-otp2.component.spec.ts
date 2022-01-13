import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadOtp2Component } from './bankload-otp2.component';

describe('BankloadOtp2Component', () => {
  let component: BankloadOtp2Component;
  let fixture: ComponentFixture<BankloadOtp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadOtp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadOtp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
