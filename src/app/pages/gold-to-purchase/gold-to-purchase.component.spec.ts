import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldToPurchaseComponent } from './gold-to-purchase.component';

describe('GoldToPurchaseComponent', () => {
  let component: GoldToPurchaseComponent;
  let fixture: ComponentFixture<GoldToPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldToPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldToPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
