import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadHelperComponent } from './bankload-helper.component';

describe('BankloadHelperComponent', () => {
  let component: BankloadHelperComponent;
  let fixture: ComponentFixture<BankloadHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
