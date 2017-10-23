import { Injectable } from '@angular/core';

@Injectable()
export class PreviewService {

  constructor() { }

  showFeaturedPreview = false;
  featuredAnimationTrigger = 'shown';

  toggleFeatured(): void {
    if (this.showFeaturedPreview) {
      this.showFeaturedPreview = false;
      this.featuredAnimationTrigger = 'hidden';
    } else {
      this.showFeaturedPreview = true;
      this.featuredAnimationTrigger = 'shown';
    }
  }

}
