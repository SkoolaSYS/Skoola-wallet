import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankLoadComponent } from './add-bank-load.component';

describe('AddBankLoadComponent', () => {
  let component: AddBankLoadComponent;
  let fixture: ComponentFixture<AddBankLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBankLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
