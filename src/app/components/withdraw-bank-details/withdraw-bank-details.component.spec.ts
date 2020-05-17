import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawBankDetailsComponent } from './withdraw-bank-details.component';

describe('WithdrawBankDetailsComponent', () => {
  let component: WithdrawBankDetailsComponent;
  let fixture: ComponentFixture<WithdrawBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
