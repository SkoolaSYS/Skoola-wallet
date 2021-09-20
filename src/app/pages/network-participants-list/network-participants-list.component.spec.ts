import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkParticipantsListComponent } from './network-participants-list.component';

describe('NetworkParticipantsListComponent', () => {
  let component: NetworkParticipantsListComponent;
  let fixture: ComponentFixture<NetworkParticipantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkParticipantsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkParticipantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
