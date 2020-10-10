import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellgoldTopViewComponent } from './sellgold-top-view.component';

describe('SellgoldTopViewComponent', () => {
  let component: SellgoldTopViewComponent;
  let fixture: ComponentFixture<SellgoldTopViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SellgoldTopViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellgoldTopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
