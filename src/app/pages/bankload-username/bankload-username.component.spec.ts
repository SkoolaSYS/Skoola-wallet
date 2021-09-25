import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadUsernameComponent } from './bankload-username.component';

describe('BankloadUsernameComponent', () => {
  let component: BankloadUsernameComponent;
  let fixture: ComponentFixture<BankloadUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
