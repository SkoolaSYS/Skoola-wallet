import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadConfirmComponent } from './bankload-confirm.component';

describe('BankloadConfirmComponent', () => {
  let component: BankloadConfirmComponent;
  let fixture: ComponentFixture<BankloadConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
