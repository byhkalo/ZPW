import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/services/basketService';
import { Product } from 'src/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  totalSum: number = 0;
  totalCount: number = 0;
  basketProducts: Array<Product> = [];

  constructor(private router: Router, private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getbasketProductsObservable().subscribe(basketProducts => {
      this.basketProducts = basketProducts;
    });
    this.basketService.getProductsSumObservable().subscribe(basketSum => {
      this.totalSum = basketSum;
    });
    this.basketService.getProductsCountObservable().subscribe(basketCount => {
      this.totalCount = basketCount;
    });
  }

  continueShopping() {
    this.router.navigate(['']);
  }

  makeOrder() {
    
  }
}
