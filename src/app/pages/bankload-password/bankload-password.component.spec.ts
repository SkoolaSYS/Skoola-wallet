import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadPasswordComponent } from './bankload-password.component';

describe('BankloadPasswordComponent', () => {
  let component: BankloadPasswordComponent;
  let fixture: ComponentFixture<BankloadPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
