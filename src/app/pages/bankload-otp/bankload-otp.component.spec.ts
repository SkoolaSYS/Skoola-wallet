import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadOtpComponent } from './bankload-otp.component';

describe('BankloadOtpComponent', () => {
  let component: BankloadOtpComponent;
  let fixture: ComponentFixture<BankloadOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
