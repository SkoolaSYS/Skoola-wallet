import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloadFpxComponent } from './bankload-fpx.component';

describe('BankloadFpxComponent', () => {
  let component: BankloadFpxComponent;
  let fixture: ComponentFixture<BankloadFpxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloadFpxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankloadFpxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
