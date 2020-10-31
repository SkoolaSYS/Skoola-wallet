import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuygoldComponent } from './buy-gold.component';

describe('BuygoldComponent', () => {
  let component: BuygoldComponent;
  let fixture: ComponentFixture<BuygoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuygoldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuygoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
