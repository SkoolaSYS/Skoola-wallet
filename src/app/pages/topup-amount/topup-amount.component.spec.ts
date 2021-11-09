import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupAmountComponent } from './topup-amount.component';

describe('TopupAmountComponent', () => {
  let component: TopupAmountComponent;
  let fixture: ComponentFixture<TopupAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
