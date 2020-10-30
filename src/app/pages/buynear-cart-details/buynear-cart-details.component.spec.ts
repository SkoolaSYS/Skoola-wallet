import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynearCartDetailsComponent } from './buynear-cart-details.component';

describe('BuynearCartDetailsComponent', () => {
  let component: BuynearCartDetailsComponent;
  let fixture: ComponentFixture<BuynearCartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuynearCartDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynearCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
