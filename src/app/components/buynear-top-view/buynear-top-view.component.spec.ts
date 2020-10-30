import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynearTopViewComponent } from './buynear-top-view.component';

describe('BuynearTopViewComponent', () => {
  let component: BuynearTopViewComponent;
  let fixture: ComponentFixture<BuynearTopViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuynearTopViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynearTopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
