import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupQrComponent } from './topup-qr.component';

describe('TopupQrComponent', () => {
  let component: TopupQrComponent;
  let fixture: ComponentFixture<TopupQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
