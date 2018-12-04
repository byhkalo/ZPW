import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../models/product';
import { from } from 'rxjs';
import { BasketService } from 'src/services/basketService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  basketProducts: Array<Product>;

  @Input() product: Product;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getbasketProductsObservable().subscribe( basketProducts => {
      this.basketProducts = basketProducts;
    })
  }

  addOneProduct() {
    this.basketService.addOne(this.product);
  }

  removeOneProduct() {
    this.basketService.removeOne(this.product, true);
  }
}
