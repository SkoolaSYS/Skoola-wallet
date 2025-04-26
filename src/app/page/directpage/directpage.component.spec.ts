import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectpageComponent } from './directpage.component';

describe('DirectpageComponent', () => {
  let component: DirectpageComponent;
  let fixture: ComponentFixture<DirectpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
