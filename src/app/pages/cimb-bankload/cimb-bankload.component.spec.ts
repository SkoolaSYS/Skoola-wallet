import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimbBankloadComponent } from './cimb-bankload.component';

describe('CimbBankloadComponent', () => {
  let component: CimbBankloadComponent;
  let fixture: ComponentFixture<CimbBankloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimbBankloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimbBankloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
