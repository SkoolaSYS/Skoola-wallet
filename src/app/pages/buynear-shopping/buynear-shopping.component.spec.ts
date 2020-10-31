import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynearShoppingComponent } from './buynear-shopping.component';

describe('BuynearShoppingComponent', () => {
  let component: BuynearShoppingComponent;
  let fixture: ComponentFixture<BuynearShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuynearShoppingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynearShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
