import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: 'VDRQPcTpE0wA8_6fGfY6FvAcHg-ivvQJ',
    domain: 'clothrehab.auth0.com',
    responseType: 'token id_token',
    audience: 'https://clothrehab.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  accessDenied = false;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash( (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/admin/home']);
      } else if (err) {
        this.router.navigate(['/admin']);
        console.log(err);
        if (err) {
          this.displayAuthError();
        }
      }
    });
  }

  private setSession(authResult): void {
    //set the time at which the access token will expire
    const expiresAt = JSON.stringify( (authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    //go back to admin auth route
    this.router.navigate(['/admin']);
  }

  public isAuthenticated(): boolean {
    //check whether current time is past the access_token's expiration time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt; //returns true if less than localStorage's expiresAt time
  }

  public displayAuthError(): void {
    this.accessDenied = true;
  }
}
