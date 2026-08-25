import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEntryDashboardComponent } from './re-entry-dashboard.component';

describe('ReEntryDashboardComponent', () => {
  let component: ReEntryDashboardComponent;
  let fixture: ComponentFixture<ReEntryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReEntryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReEntryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
