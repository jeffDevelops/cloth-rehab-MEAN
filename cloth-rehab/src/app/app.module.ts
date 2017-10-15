import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProtectedComponent } from './protected/protected.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


import { AuthService } from './auth.service';


const appRoutes: Routes = [
  { path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/authenticated',
    component: ProtectedComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProtectedComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //debugging purposes
    )
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
