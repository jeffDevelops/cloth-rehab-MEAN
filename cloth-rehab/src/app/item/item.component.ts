import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // Loading the correct shirt
  pathname = window.location.pathname;
  shirtName = this.pathname.slice(1, this.pathname.length);
  shirt;

  // Images
  displayed;
  previews = [];
  modalDisplayed = false;
  displaySelected(index) {
    // add the large image to be replaced to the previews array
    this.previews.push(this.displayed);
    const selected = this.previews[index];
    // update the large image
    this.displayed = selected;
    // remove newly selected item from previews list
    this.previews.splice(index, 1);
  }
  toggleModal() {
    this.modalDisplayed = !this.modalDisplayed;
  }

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getSpecificShirt(this.shirtName).then( shirt => {
      this.shirt = shirt;
      console.log(this.shirt);
      this.displayed = this.shirt.primaryImage;
      if (this.shirt.secondaryImage) {
        this.previews.push(this.shirt.secondaryImage);
      }
      if (this.shirt.image3) {
        this.previews.push(this.shirt.image3);
      }
      if (this.shirt.image4) {
        this.previews.push(this.shirt.image4);
      }
    });
  }
}
