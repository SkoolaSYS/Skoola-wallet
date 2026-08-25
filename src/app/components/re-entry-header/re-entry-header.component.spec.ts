import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEntryHeaderComponent } from './re-entry-header.component';

describe('ReEntryHeaderComponent', () => {
  let component: ReEntryHeaderComponent;
  let fixture: ComponentFixture<ReEntryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReEntryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReEntryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
