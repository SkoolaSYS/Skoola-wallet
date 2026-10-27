import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkoolaMarketplaceComponent } from './skoola-marketplace.component';

describe('SkoolaMarketplaceComponent', () => {
  let component: SkoolaMarketplaceComponent;
  let fixture: ComponentFixture<SkoolaMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkoolaMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkoolaMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
