import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimbbankDetailsComponent } from './cimbbank-details.component';

describe('CimbbankDetailsComponent', () => {
  let component: CimbbankDetailsComponent;
  let fixture: ComponentFixture<CimbbankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimbbankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimbbankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
