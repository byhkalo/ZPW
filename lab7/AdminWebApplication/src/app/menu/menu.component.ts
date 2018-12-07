import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openProducts() {
    this.router.navigate(['/dashboard/products']);
  }
  openCategories() {
    this.router.navigate(['/dashboard/categories']);
  }
  openOrders() {
    this.router.navigate(['/dashboard/orders']);
  }
}
