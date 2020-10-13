import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuygoldTopViewComponent } from './buygold-top-view.component';

describe('BuygoldTopViewComponent', () => {
  let component: BuygoldTopViewComponent;
  let fixture: ComponentFixture<BuygoldTopViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuygoldTopViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuygoldTopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
