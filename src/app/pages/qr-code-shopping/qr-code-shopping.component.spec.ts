import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeShoppingComponent } from './qr-code-shopping.component';

describe('QrcodeShoppingComponent', () => {
  let component: QrcodeShoppingComponent;
  let fixture: ComponentFixture<QrcodeShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrcodeShoppingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
