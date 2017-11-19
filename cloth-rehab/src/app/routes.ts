import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth-guard.service';

// Admin Portal
import { AdminComponent } from './admin/admin.component';
import { CallbackComponent } from './callback/callback.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PreviewFeaturedComponent } from './preview-featured/preview-featured.component';

// eCommerce Site
import { HomepageComponent } from './homepage/homepage.component';
import { SiteNavComponent } from './site-nav/site-nav.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ItemComponent } from './item/item.component';

// Meta
import { AboutComponent } from './about/about.component';
import { PastWorkComponent } from './past-work/past-work.component';

export const appRoutes: Routes = [
  // Online Store
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'womens',
    component: WomenComponent
  },
  {
    path: 'mens',
    component: MenComponent
  },
  {
    path: ':slug',
    component: ItemComponent
  },
  // Meta Business Info
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'work',
    component: PastWorkComponent
  },
  // Admin Portal
  { path: 'admin',
    component: AdminComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    canActivate: [ AuthGuard ]
  }
];
