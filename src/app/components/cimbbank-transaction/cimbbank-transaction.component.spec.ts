import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimbbankTransactionComponent } from './cimbbank-transaction.component';

describe('CimbbankTransactionComponent', () => {
  let component: CimbbankTransactionComponent;
  let fixture: ComponentFixture<CimbbankTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimbbankTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimbbankTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
