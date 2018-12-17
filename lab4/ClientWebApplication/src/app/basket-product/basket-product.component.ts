import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product.model';
import { BasketService } from 'src/services/basketService';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.css']
})
export class BasketProductComponent implements OnInit {

  @Input() product: Product;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }
  addOneToBasket() {
    this.basketService.addOneFromBasket(this.product);
  }
  removeOneFromBasket() {
    this.basketService.removeOneFromBasket(this.product);
  }
  deleteFromBasket() {
    this.basketService.deleteFormBasket(this.product);
  }
}
