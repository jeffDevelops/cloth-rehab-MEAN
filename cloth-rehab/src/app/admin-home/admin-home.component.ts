import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  greetings: Array<string> = ['Welcome', 'Heya', 'Hi', 'Looking good', 'It\'s my girl', 'Yo', '\'Sup', 'What up', 'Great to see you', 'Hello', 'Gosh, you look gorgeous today', 'Your wish is my command', 'It\'s gonna be a great day', 'Let\'s update your portfolio'];

  which: number;

  names: Array<string> = ['Vivian','Viv', 'Vivian Bananakrishnanagram', 'Vivavian', 'Viyuhhhv', 'Vivian Krishnan'];

  whom: number;

  randomizeGreeting() : number {
    return Math.floor(Math.random() * 14);
  }

  randomizeName() : number {
    return Math.floor(Math.random() * 6);
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.which = this.randomizeGreeting();
    this.whom = this.randomizeName();
  }

}
