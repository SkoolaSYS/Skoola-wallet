import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpcardComponent } from './otpcard.component';

describe('OtpcardComponent', () => {
  let component: OtpcardComponent;
  let fixture: ComponentFixture<OtpcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
