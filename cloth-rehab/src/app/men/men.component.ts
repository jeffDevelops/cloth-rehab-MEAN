import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['../women/women.component.scss']
})
export class MenComponent implements OnInit {

  constructor(private http: HttpService) { }

  shirts: Array<any>;

  ngOnInit() {
    this.http.getAllMensShirts().then( shirts => {
      this.shirts = shirts;
    });
  }

}
