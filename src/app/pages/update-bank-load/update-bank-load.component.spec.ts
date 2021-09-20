import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankLoadComponent } from './update-bank-load.component';

describe('UpdateBankLoadComponent', () => {
  let component: UpdateBankLoadComponent;
  let fixture: ComponentFixture<UpdateBankLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBankLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBankLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
