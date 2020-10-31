import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellGoldDetailsComponent } from './sell-gold-details.component';

describe('SellGoldDetailsComponent', () => {
  let component: SellGoldDetailsComponent;
  let fixture: ComponentFixture<SellGoldDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SellGoldDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellGoldDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
