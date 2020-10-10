import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGoldDetailsViewComponent } from './buygold-details-view.component';

describe('BuyGoldDetailsViewComponent', () => {
  let component: BuyGoldDetailsViewComponent;
  let fixture: ComponentFixture<BuyGoldDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyGoldDetailsViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGoldDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
