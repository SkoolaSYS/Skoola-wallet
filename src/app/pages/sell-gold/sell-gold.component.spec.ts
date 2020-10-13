import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellgoldComponent } from './sell-gold.component';

describe('SellgoldComponent', () => {
  let component: SellgoldComponent;
  let fixture: ComponentFixture<SellgoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SellgoldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
