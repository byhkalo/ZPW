import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  categories: Map<String, Boolean>;
  categoriesArray: Array<String>;
  
  countMax: Number;
  currentCountValue: Number;

  minPrice: Number;
  maxPrice: Number;
  currentMinPriceBorder: Number;
  currentMaxPriceBorder: Number;

  pagination: Number;
  paginationTypes: Array<Number>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllCategories().subscribe(allCategories => {
      this.categories = allCategories;
      this.categoriesArray = Array.from(allCategories.keys());
    });
    this.productsService.getSelectedCountRangeObservable().subscribe(countValue => {
      this.countMax = this.productsService.maxCount();
      this.currentCountValue = countValue.minValue;
    });
    this.productsService.getSelectedPriceRangeObservable().subscribe(priceRange => {
      this.minPrice = this.productsService.minPrice();
      this.maxPrice = this.productsService.maxPrice();
      this.currentMinPriceBorder = priceRange.minValue;
      this.currentMaxPriceBorder = priceRange.maxValue;
    });
    this.productsService.getAllPaginationTypesObservable().subscribe(paginationTypes => {
      this.paginationTypes = paginationTypes;
    });
    this.productsService.getSelectedPaginationTypeObservable().subscribe(selectedPagination => {
      this.pagination = selectedPagination;
    });
  }

  changeCategory(category: String, values: any) {
    if (values.currentTarget.checked) {
      this.productsService.selectCategory(category);
    } else {
      this.productsService.deselectCategory(category);
    }
  }

  setPagination(pagiantionValue: Number) {
    this.productsService.selectPaginationType(pagiantionValue);
  }

  setMinimumCount(minCount: Number) {
    this.productsService.setMinCountRange(minCount);
  }
}
