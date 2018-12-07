import { Component, OnInit } from '@angular/core';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
