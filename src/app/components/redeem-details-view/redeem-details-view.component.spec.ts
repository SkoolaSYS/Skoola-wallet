import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemDetailsViewComponent } from './redeem-details-view.component';

describe('RedeemDetailsViewComponent', () => {
  let component: RedeemDetailsViewComponent;
  let fixture: ComponentFixture<RedeemDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
