import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleCardsComponent } from './recycle-cards.component';

describe('RecycleCardsComponent', () => {
  let component: RecycleCardsComponent;
  let fixture: ComponentFixture<RecycleCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
