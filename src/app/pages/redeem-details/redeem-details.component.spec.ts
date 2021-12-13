import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemDetailsComponent } from './redeem-details.component';

describe('RedeemDetailsComponent', () => {
  let component: RedeemDetailsComponent;
  let fixture: ComponentFixture<RedeemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
