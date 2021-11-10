import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitHeaderComponent } from './split-header.component';

describe('SplitHeaderComponent', () => {
  let component: SplitHeaderComponent;
  let fixture: ComponentFixture<SplitHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
