import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeDetailsViewComponent } from './pledge-details-view.component';

describe('PledgeDetailsViewComponent', () => {
  let component: PledgeDetailsViewComponent;
  let fixture: ComponentFixture<PledgeDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
