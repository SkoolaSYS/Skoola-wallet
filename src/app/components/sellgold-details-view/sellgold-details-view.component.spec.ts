import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellGoldDetailsViewComponent } from './sellgold-details-view.component';

describe('SellGoldDetailsViewComponent', () => {
  let component: SellGoldDetailsViewComponent;
  let fixture: ComponentFixture<SellGoldDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SellGoldDetailsViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellGoldDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
