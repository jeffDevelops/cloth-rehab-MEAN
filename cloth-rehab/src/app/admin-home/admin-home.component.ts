import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import { PreviewService } from '../preview.service';
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
        minHeight: '300px'
      })),
      transition('inactive <=> active', animate('350ms ease-in'))
    ]),
    trigger('formDisplay', [
      state('inactive', style({
        opacity: 0,
      })),
      state('active', style({
        opacity: 1,
      })),
      transition('inactive => active', animate('350ms 100ms ease-in')),
      transition('active => inactive', animate('350ms ease-in'))
    ])
  ]
})
export class AdminHomeComponent implements OnInit {

  constructor(public auth: AuthService, public preview: PreviewService) { }

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
    inventory: 'inactive',
    portfolio: 'inactive',
    featured: 'inactive',
    info: 'inactive'
  };

  showForm = false;

  // ngModel properties
  featuredProject = {
    title: '',
    description: '',
    // front photo
    // back photo
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
  toggleDropdown(event): string {
    const specificDropdown = event.currentTarget;
    const elementType = event.target.nodeName.toLowerCase();
    console.log('Before: ', this.toggleState);
    if (elementType === 'i') {
      if (this.toggleState[specificDropdown.id] === 'active') {
        return this.toggleState[specificDropdown.id] = 'inactive';
      } else {
        // only one dropdown can be active at a time for UX purposes
        Object.keys(this.toggleState).forEach( (key, value) => {
          return this.toggleState[key] = 'inactive';
        });
        return this.toggleState[specificDropdown.id] = 'active';
      }
    }
    // only one dropdown can be active at a time for UX purposes
    Object.keys(this.toggleState).forEach( (key, value) => {
      return this.toggleState[key] = 'inactive';
    });
    return this.toggleState[specificDropdown.id] = 'active';
  }

  toggleFeaturedPreview(): void {
    this.preview.toggleFeatured();
  }

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
