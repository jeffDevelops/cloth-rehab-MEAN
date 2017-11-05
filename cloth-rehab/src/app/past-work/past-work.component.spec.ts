import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastWorkComponent } from './past-work.component';

describe('PastWorkComponent', () => {
  let component: PastWorkComponent;
  let fixture: ComponentFixture<PastWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
