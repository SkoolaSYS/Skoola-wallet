import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadApprovalComponent } from './bankload-approval.component';

describe('BankloadApprovalComponent', () => {
  let component: BankloadApprovalComponent;
  let fixture: ComponentFixture<BankloadApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
