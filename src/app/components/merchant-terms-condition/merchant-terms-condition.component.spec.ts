import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantTermsConditionComponent } from './merchant-terms-condition.component';

describe('MerchantTermsConditionComponent', () => {
  let component: MerchantTermsConditionComponent;
  let fixture: ComponentFixture<MerchantTermsConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantTermsConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantTermsConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
