import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CallbackComponent } from './callback/callback.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PreviewFeaturedComponent } from './preview-featured/preview-featured.component';

import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { PreviewService } from './preview.service';


const appRoutes: Routes = [
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes
    )
  ],
  providers: [ AuthService, AuthGuard, PreviewService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
