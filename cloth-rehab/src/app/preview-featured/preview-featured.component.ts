import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-preview-featured',
  templateUrl: './preview-featured.component.html',
  styleUrls: ['./preview-featured.component.scss'],
  animations: [
    trigger('dismissPreview', [
      state('shown', style({
        opacity: '1'
      })),
      state('dismissed', style({
        opacity: '0'
      })),
      transition('shown <=> dismissed', animate('350ms ease-in'))
    ])
  ]
})
export class PreviewFeaturedComponent implements OnInit {

  constructor(public preview: PreviewService) { }

  toggleFeaturedPreview(): void {
    if (this.preview.featuredAnimationTrigger === 'dismissed') {
      this.preview.featuredAnimationTrigger = 'shown';
    } else {
    this.preview.featuredAnimationTrigger = 'dismissed';
    }
    window.setTimeout( () => {
      this.preview.toggleFeatured();
    }, 350);
  }

  ngOnInit() {
  }

}
