import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  constructor(private http: HttpService) { }

  shirts: Array<any>;

  ngOnInit() {
    this.http.getAllWomensShirts().then( shirts => {
      console.log(shirts);
      this.shirts = shirts;
    });
  }

}
