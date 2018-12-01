import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  minStar = 3;
  pagination = 5;
  paginationTypes = [5, 15, 30, 50];
  constructor() { }

  ngOnInit() {
  }

  filterByMinStarsCount(starsCount: number) {
    this.minStar = starsCount;
  }

  setPagination(pagiantionValue: number) {
    this.pagination = pagiantionValue;
  }
}
