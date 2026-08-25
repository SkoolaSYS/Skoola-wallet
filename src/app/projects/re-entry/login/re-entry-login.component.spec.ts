import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEntryLoginComponent } from './re-entry-login.component';

describe('LoginComponent', () => {
  let component: ReEntryLoginComponent;
  let fixture: ComponentFixture<ReEntryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReEntryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReEntryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
