import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/product.service';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  categories: Map<String, Boolean>;
  categoriesArray: Array<String>;
  
  maxCount: number;
  minCount: number;
  currentMaxCountBorder: Number;
  currentMinCountBorder: Number;

  minPrice: number;
  maxPrice: number;
  currentMinPriceBorder: Number;
  currentMaxPriceBorder: Number;

  pagination: Number;
  paginationTypes: Array<Number>;

  optionsCount: Options = {
    floor: this.minCount,
    ceil: this.maxCount,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          this.currentMinCountBorder = value;
          this.productsService.setCountRange(value, this.currentMaxCountBorder);
          return '<b>'+ value + '</b>';
        case LabelType.High:
          this.currentMaxCountBorder = value;
          this.productsService.setCountRange(this.currentMinCountBorder, value);
          return '<b>'+ value + '</b>';
        default:
          return '' + value;
      }
    }
  };
  optionsPrice: Options = {
    floor: this.minPrice,
    ceil: this.maxPrice,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          this.currentMinPriceBorder = value;
          this.productsService.setPriceRange(value, this.currentMaxPriceBorder);
          return '<b>'+ value + 'zł</b>';
        case LabelType.High:
          this.currentMaxPriceBorder = value;
          this.productsService.setPriceRange(this.currentMinPriceBorder, value);
          return '<b>'+ value + 'zł</b>';
        default:
          return value + 'Zł';
      }
    }
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllCategories().subscribe(allCategories => {
      this.categories = allCategories;
      this.categoriesArray = Array.from(allCategories.keys());
    });
    this.productsService.getSelectedCountRangeObservable().subscribe(countRange => {
      this.maxCount = this.productsService.maxCount();
      this.minCount = this.productsService.minCount();
      this.currentMaxCountBorder = countRange.maxValue;
      this.currentMinCountBorder = countRange.minValue;
      this.optionsCount.floor = this.minCount;
      this.optionsCount.ceil = this.maxCount;
    });
    this.productsService.getSelectedPriceRangeObservable().subscribe(priceRange => {
      this.minPrice = this.productsService.minPrice();
      this.maxPrice = this.productsService.maxPrice();
      this.currentMinPriceBorder = priceRange.minValue;
      this.currentMaxPriceBorder = priceRange.maxValue;
      this.optionsPrice.floor = this.minPrice;
      this.optionsPrice.ceil = this.maxPrice;
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
}
