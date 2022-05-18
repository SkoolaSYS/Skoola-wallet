import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAgreementPageComponent } from './merchant-agreement-page.component';

describe('MerchantAgreementPageComponent', () => {
  let component: MerchantAgreementPageComponent;
  let fixture: ComponentFixture<MerchantAgreementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantAgreementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantAgreementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
