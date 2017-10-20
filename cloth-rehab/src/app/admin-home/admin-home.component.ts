import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  animations: [
    trigger('toggleState', [
      state('inactive', style({
        minHeight: '0px'
      })),
      state('active', style({
        minHeight: '600px'
      })),
      transition('inactive => active', animate('350ms ease-in')),
      transition('active => inactive', animate('350ms ease-out'))
    ])
  ]
})
export class AdminHomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  // Greeting
  greetings: Array<string> = [
    'Welcome', 'Heya', 'Hi', 'Looking good', 'It\'s my girl', 'Yo', '\'Sup',
    'What up', 'Great to see you', 'Hello', 'Gosh, you look gorgeous today',
    'Your wish is my command', 'It\'s gonna be a great day',
    'Let\'s update your portfolio'
  ];

  which: number;

  names: Array<string> = [
    'Vivian', 'Viv', 'Vivian Bananakrishnanagram', 'Vivavian', 'Viyuhhhv'
  ];

  whom: number;

  shouldToggle: boolean;
  toggleState = {
    portfolio: 'inactive',
    featured: 'inactive',
    info: 'inactive'
  };

  randomizeGreeting(): number {
    return Math.floor(Math.random() * 14);
  }
  randomizeName(): number {
    return Math.floor(Math.random() * 5);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const viewport = window.innerWidth;
    viewport < 800 ? this.shouldToggle = true : this.shouldToggle = false;
  }

  toggleDropdown(event): void {
    console.log(event.currentTarget.id);
    const specificDropdown = event.currentTarget.id;
    if (this.toggleState[specificDropdown] === 'active') {
      this.toggleState[specificDropdown] = 'inactive';
    } else {
      // only one dropdown can be active at a time for UX purposes
      Object.keys(this.toggleState).forEach( (key, value) => {
        return this.toggleState[key] = 'inactive';
      });
      this.toggleState[specificDropdown] = 'active';
    }
    // this.toggleState.portfolio = this.toggleState.portfolio === 'active' ? 'inactive' : 'active';
    // this.toggleState.featured = this.toggleState.featured === 'active' ? 'inactive' : 'active';
    // this.toggleState.info = this.toggleState.info === 'active' ? 'inactive' : 'active';
  }

  // Show options by default on larger screens (checked with *ngIf)
  // showOptionsOnLargeScreens(): boolean {
  //   if (window.innerWidth > 800) {
  //     console.log('show returned true');
  //     return true;
  //   } else {
  //     console.log('show returned false');
  //     return false;
  //   }
  // }

  ngOnInit() {
    // Greeting
    this.which = this.randomizeGreeting();
    this.whom = this.randomizeName();

    // Detecting Viewport Width
    if (window.innerWidth < 800) {
      this.shouldToggle = true;
    } else {
      this.shouldToggle = false;
    }
  }

}
