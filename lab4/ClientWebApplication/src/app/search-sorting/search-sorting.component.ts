import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/product.service';
import { SortType } from '../../models/sortType';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.css']
})
export class SearchSortingComponent implements OnInit {
  
  sortingType: SortType;
  sortingTypes: Array<SortType>;
  searchWord: String = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllSortingTypesObservable().subscribe(sortingTypes => {
      this.sortingTypes = sortingTypes;
    });
    this.productsService.getSelectedSortingTypeObservable().subscribe(sortingType => {
      this.sortingType = sortingType;
    });
    this.productsService.getSearchingWord().subscribe(searchWord => {
      this.searchWord = searchWord;
    })
  }

  searchBy(searchWord: String) {
    console.log('searchWord ' + searchWord);
    this.productsService.setSearchingWord(searchWord);
    console.log('searchWord ' + searchWord);
  }

  sortingBy(sortType: SortType) {
    this.productsService.setSortType(sortType); 
    console.log('sort type ' + sortType.title);
  }
  resetSorting() {
    console.log('reset sorting');
    this.productsService.setSearchingWord('');
    this.productsService.setSortType(this.sortingTypes[0]);
  }
}
