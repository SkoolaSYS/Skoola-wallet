import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRecipientComponent } from './transfer-recipient.component';

describe('TransferRecipientComponent', () => {
  let component: TransferRecipientComponent;
  let fixture: ComponentFixture<TransferRecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
