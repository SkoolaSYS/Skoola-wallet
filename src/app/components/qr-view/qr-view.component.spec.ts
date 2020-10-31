import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { qrViewComponent } from './qr-view.component';

describe('qrViewComponent', () => {
  let component: qrViewComponent;
  let fixture: ComponentFixture<qrViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [qrViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(qrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
