import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCertComponent } from './merchant-cert.component';

describe('MerchantCertComponent', () => {
  let component: MerchantCertComponent;
  let fixture: ComponentFixture<MerchantCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
