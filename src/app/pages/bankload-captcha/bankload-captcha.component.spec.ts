import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadCaptchaComponent } from './bankload-captcha.component';

describe('BankloadCaptchaComponent', () => {
  let component: BankloadCaptchaComponent;
  let fixture: ComponentFixture<BankloadCaptchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadCaptchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
