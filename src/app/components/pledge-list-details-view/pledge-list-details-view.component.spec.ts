import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeListDetailsViewComponent } from './pledge-list-details-view.component';

describe('PledgeListDetailsViewComponent', () => {
  let component: PledgeListDetailsViewComponent;
  let fixture: ComponentFixture<PledgeListDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeListDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeListDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
