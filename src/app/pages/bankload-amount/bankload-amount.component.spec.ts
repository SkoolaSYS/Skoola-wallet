import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadAmountComponent } from './bankload-amount.component';

describe('BankloadAmountComponent', () => {
  let component: BankloadAmountComponent;
  let fixture: ComponentFixture<BankloadAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
