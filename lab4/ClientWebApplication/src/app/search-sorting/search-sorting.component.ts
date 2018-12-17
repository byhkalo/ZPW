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
  
  

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }
}
