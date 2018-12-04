import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/services/product.service';
import { Product } from 'src/models/product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  presentedProducts: Array<Product> = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getSortedFilteredProducts().subscribe(products => {
      this.presentedProducts = products;
    });
  }
}
