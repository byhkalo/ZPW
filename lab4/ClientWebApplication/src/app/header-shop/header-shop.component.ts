import { Component, OnInit } from '@angular/core';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-header-shop',
  templateUrl: './header-shop.component.html',
  styleUrls: ['./header-shop.component.css']
})
export class HeaderShopComponent implements OnInit {

  constructor() { }

  productsCount = 0;
  priceSum = 0.0;

  ngOnInit() {
  }

}
