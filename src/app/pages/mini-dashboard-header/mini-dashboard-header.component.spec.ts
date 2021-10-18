import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDashboardHeaderComponent } from './mini-dashboard-header.component';

describe('MiniDashboardHeaderComponent', () => {
  let component: MiniDashboardHeaderComponent;
  let fixture: ComponentFixture<MiniDashboardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniDashboardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
