import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss']
})
export class SiteNavComponent implements OnInit {

  routePath: string;

  constructor() { }

  checkRoute(routeName): boolean {
    console.log(window.location.pathname);
    console.log(routeName);
    return true;
  }

  ngOnInit() {
    this.routePath = window.location.pathname;
    console.log(this.routePath);
  }

}
