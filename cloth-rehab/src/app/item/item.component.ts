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

  // Sizes Available
  sizesAvailable = [];

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
      if (this.shirt.kidsExtraSmallAvail > 0) {
        this.sizesAvailable.push('Kids XS');
      }
      if (this.shirt.kidsSmallAvail > 0) {
        this.sizesAvailable.push('Kids S');
      }
      if (this.shirt.kidsMediumAvail > 0) {
        this.sizesAvailable.push('Kids M');
      }
      if (this.shirt.kidsLargeAvail > 0) {
        this.sizesAvailable.push('Kids L');
      }
      if (this.shirt.kidsExtraLargeAvail > 0) {
        this.sizesAvailable.push('Kids XL');
      }
      if (this.shirt.extraSmallAvailable > 0) {
        this.sizesAvailable.push('XS');
      }
      if (this.shirt.smallAvailable > 0) {
        this.sizesAvailable.push('S');
      }
      if (this.shirt.mediumAvailable > 0) {
        this.sizesAvailable.push('M');
      }
      if (this.shirt.largeAvailable > 0) {
        this.sizesAvailable.push('L');
      }
      if (this.shirt.extraLargeAvailable > 0) {
        this.sizesAvailable.push('XL');
      }
      if (this.shirt.xxlAvailable > 0) {
        this.sizesAvailable.push('XXL');
      }
    });
  }
}
