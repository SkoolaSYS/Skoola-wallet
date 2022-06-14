import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupActiveComponent } from './signup-active.component';

describe('SignupActiveComponent', () => {
  let component: SignupActiveComponent;
  let fixture: ComponentFixture<SignupActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
