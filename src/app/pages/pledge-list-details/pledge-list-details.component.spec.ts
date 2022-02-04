import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeListDetailsComponent } from './pledge-list-details.component';

describe('PledgeListDetailsComponent', () => {
  let component: PledgeListDetailsComponent;
  let fixture: ComponentFixture<PledgeListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
