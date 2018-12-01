import { Component, OnInit } from '@angular/core';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.css']
})
export class SearchSortingComponent implements OnInit {
  sortingType = { title: 'Name Ascending',
                  action: this.sortingByNameAscending };
  sortingTypes = [
    { title: 'Price Low to top',
      action: this.sortingByPriceLowToTop }, 
    { title: 'Price Top to Low',
    action: this.sortingByPriceTopToLow }, 
    { title: 'Name Ascending',
    action: this.sortingByNameAscending }, 
    { title: 'Name Descending',
    action: this.sortingByNameDescending } 
  ];
  constructor() { }

  ngOnInit() {
  }
  sortingByPriceTopToLow() {
    this.sortingByPrice(true)
  }
  sortingByPriceLowToTop() {
    this.sortingByPrice(false)
  }
  sortingByNameAscending() {
    this.sortingByName(true)
  }
  sortingByNameDescending() {
    this.sortingByName(false)
  }

  private sortingByPrice(topToLow: Boolean): void {
      if (topToLow) {
        this.sortingType = this.sortingTypes[1];
      } else {
        this.sortingType = this.sortingTypes[0];
      }
  }
  private sortingByName(isAscending: Boolean): void {
    if (isAscending) {
      this.sortingType = this.sortingTypes[2];
    } else {
      this.sortingType = this.sortingTypes[3];
    }
  }
}
