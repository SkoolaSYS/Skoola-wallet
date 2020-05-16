import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadDetailsComponent } from './bankload-details.component';

describe('BankloadDetailsComponent', () => {
  let component: BankloadDetailsComponent;
  let fixture: ComponentFixture<BankloadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
