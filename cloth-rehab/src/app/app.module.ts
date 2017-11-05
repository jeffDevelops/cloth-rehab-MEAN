import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

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
import { AboutComponent } from './about/about.component';
import { PastWorkComponent } from './past-work/past-work.component';

// Services
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { PreviewService } from './preview.service';
import { HttpService } from './http.service';

const appRoutes: Routes = [
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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CallbackComponent,
    AdminHomeComponent,
    PreviewFeaturedComponent,
    HomepageComponent,
    SiteNavComponent,
    WomenComponent,
    MenComponent,
    AboutComponent,
    PastWorkComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes
    ),
    HttpModule
  ],
  providers: [ AuthService, AuthGuard, PreviewService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
