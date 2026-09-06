import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkoolaLoginComponent } from './skoola-login.component';

describe('SkoolaLoginComponent', () => {
  let component: SkoolaLoginComponent;
  let fixture: ComponentFixture<SkoolaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkoolaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkoolaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
