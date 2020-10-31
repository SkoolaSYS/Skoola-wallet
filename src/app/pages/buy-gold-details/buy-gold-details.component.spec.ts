import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGoldDetailsComponent } from './buy-gold-details.component';

describe('BuyGoldDetailsComponent', () => {
  let component: BuyGoldDetailsComponent;
  let fixture: ComponentFixture<BuyGoldDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyGoldDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGoldDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
