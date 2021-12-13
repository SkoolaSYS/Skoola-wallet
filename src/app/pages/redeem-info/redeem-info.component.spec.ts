import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemInfoComponent } from './redeem-info.component';

describe('RedeemInfoComponent', () => {
  let component: RedeemInfoComponent;
  let fixture: ComponentFixture<RedeemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
