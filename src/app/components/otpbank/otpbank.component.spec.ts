import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpbankComponent } from './otpbank.component';

describe('OtpbankComponent', () => {
  let component: OtpbankComponent;
  let fixture: ComponentFixture<OtpbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
