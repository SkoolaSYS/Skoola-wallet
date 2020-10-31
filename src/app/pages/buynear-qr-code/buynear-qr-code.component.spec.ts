import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynearQrcodeComponent } from './buynear-qr-code.component';

describe('BuynearQrcodeComponent', () => {
  let component: BuynearQrcodeComponent;
  let fixture: ComponentFixture<BuynearQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuynearQrcodeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynearQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
