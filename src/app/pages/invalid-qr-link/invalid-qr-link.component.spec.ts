import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidQrLinkComponent } from './invalid-qr-link.component';

describe('InvalidQrLinkComponent', () => {
  let component: InvalidQrLinkComponent;
  let fixture: ComponentFixture<InvalidQrLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidQrLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidQrLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
