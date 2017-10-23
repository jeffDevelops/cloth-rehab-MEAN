import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFeaturedComponent } from './preview-featured.component';

describe('PreviewFeaturedComponent', () => {
  let component: PreviewFeaturedComponent;
  let fixture: ComponentFixture<PreviewFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
