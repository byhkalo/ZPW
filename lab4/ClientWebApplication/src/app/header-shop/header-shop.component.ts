import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/services/basketService';
import { Router } from '@angular/router';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-header-shop',
  templateUrl: './header-shop.component.html',
  styleUrls: ['./header-shop.component.css']
})
export class HeaderShopComponent implements OnInit {

  constructor(private router: Router, private basketService: BasketService) { }

  productsCount = 0;
  priceSum = 0.0;

  ngOnInit() {
    this.basketService.getProductsCountObservable().subscribe(productsCount => {
      this.productsCount = productsCount;
    });
    this.basketService.getProductsSumObservable().subscribe(productsSum => {
      this.priceSum = productsSum;
    });
  }
  openMainShop() {
    this.router.navigate(['']);
  }
  openBasketDetail() {
    this.router.navigate(['basket']);
  }
}
