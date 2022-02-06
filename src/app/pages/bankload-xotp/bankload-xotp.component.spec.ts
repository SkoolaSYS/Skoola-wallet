import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadXotpComponent } from './bankload-xotp.component';

describe('BankloadXotpComponent', () => {
  let component: BankloadXotpComponent;
  let fixture: ComponentFixture<BankloadXotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadXotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadXotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
