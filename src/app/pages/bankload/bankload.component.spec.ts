import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadComponent } from './bankload.component';

describe('BankloadComponent', () => {
  let component: BankloadComponent;
  let fixture: ComponentFixture<BankloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
