import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/models/product.model';
import { Category } from 'src/models/category.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product
  isUpdate: boolean
  categories: Category[] = [{id: 2, name: 'Smartphones'}, {id: 2, name: 'Laptops'}, {id: 2, name: 'Monitors'}, {id: 2, name: 'Accesorises'}];
  productCategory: string
  productCount: number
  productPrice: number
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product | null) { 
    this.product = data ? data : new Product();
    this.isUpdate = data != null;
    this.productCategory = this.product.category;
    this.productCount = this.product.count;
    this.productPrice = this.product.price;
  }

  ngOnInit() {
  }

}
