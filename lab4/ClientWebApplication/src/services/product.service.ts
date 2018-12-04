import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { SortType } from '../models/sortType';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    // Searching Word Properties
    private searchingWord: String = '';
    searchingWordObservable = new BehaviorSubject(this.searchingWord);
    // Sorting Type Properties
    private allSortingTypes: Array<SortType> = [
        { title: 'Price Low to top', id: 0 }, 
        { title: 'Price Top to Low', id: 1 }, 
        { title: 'Name Ascending', id: 2 }, 
        { title: 'Name Descending', id: 3 } 
    ];
    private selectedSortingType: SortType = { title: 'Name Ascending', id: 2 };
    allSortingTypesObservable = new BehaviorSubject(this.allSortingTypes);
    selectedSortingTypeObservable = new BehaviorSubject(this.selectedSortingType);
    // Catagoties Type Properties
    private allCategories: Map<String, Boolean> = new Map();
    allCategoriesObservable = new BehaviorSubject(this.allCategories);
    // Count Range Properties
    private selectedCountRange: { minValue: Number } = { minValue: 0 };
    selectCountRangeObservable = new BehaviorSubject(this.selectedCountRange);
    // Price Range Properties
    private selectedPriceRange: { minValue: Number, maxValue: Number } = { minValue: 0, maxValue: 1000000 };
    selectPriceRangeObservable = new BehaviorSubject(this.selectedPriceRange);
    // Products All/Sorting Properties
    private imageUrl = 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/compare/iphone-compare-models-201809?wid=282&hei=383&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1535588384763';
    private mbImageUrl = 'https://images-na.ssl-images-amazon.com/images/I/61EMB%2Bkx69L._SX355_.jpg';
    private allProducts: Array<Product> = [
        {id: 1, name: 'iPhone #2', price: 430, category: 'Smartphones', count: 30, imageUrl: this.imageUrl},
        {id: 2, name: 'MacBook #3', price: 1330, category: 'Laptops', count: 40, imageUrl: this.mbImageUrl},
        {id: 0, name: 'iPhone #1', price: 530, category: 'Smartphones', count: 20, imageUrl: this.imageUrl},
        {id: 3, name: 'iPhone #4', price: 230, category: 'Smartphones', count: 50, imageUrl: this.imageUrl}];
    private sortedProducts: Array<Product> = this.allProducts;
    allProductsObservable = new BehaviorSubject(this.allProducts);
    sortedProductsObservable = new BehaviorSubject(this.sortedProducts);
    // Pagination Properties
    private allPaginationTypes: Array<Number> = [5, 15, 30, 50];
    private selectedPaginationType = this.allPaginationTypes[0];
    allPaginationTypesObservable = new BehaviorSubject(this.allPaginationTypes);
    selectedPaginationTypeObservable = new BehaviorSubject(this.selectedPaginationType);

    constructor() { 
        this.allCategories.set('Smartphones', true);
        this.allCategories.set('Laptops', true);
        this.allCategories.set('Monitors', true);
        this.allCategories.set('Accesories', true);
        this.sortedProductsObservable.next(this.sortedProducts);
    }
    // Searching
    getSearchingWord(): BehaviorSubject<String> {
        return this.searchingWordObservable;
    }
    setSearchingWord(searchingWord: String) {
        this.searchingWord = searchingWord;
        this.searchingWordObservable.next(this.searchingWord);
        this.sortFilterProducts();
    }
    // Sorting
    getAllSortingTypesObservable(): BehaviorSubject<SortType[]> {
        return this.allSortingTypesObservable;
    }
    getSelectedSortingTypeObservable(): BehaviorSubject<SortType> {
        return this.selectedSortingTypeObservable;
    }
    setSortType(sortType: SortType) {
        this.selectedSortingType = sortType;
        this.selectedSortingTypeObservable.next(this.selectedSortingType);
        this.sortFilterProducts();
    }
    // Categories
    getAllCategories(): BehaviorSubject<Map<String, Boolean>> {
        return this.allCategoriesObservable;
    }
    selectCategory(category: String): void {
        this.allCategories.set(category, true);
        this.allCategoriesObservable.next(this.allCategories)
        this.sortFilterProducts();
    }
    deselectCategory(category: String): void {
        this.allCategories.set(category, false);
        this.allCategoriesObservable.next(this.allCategories)
        this.sortFilterProducts();
    }
    // Count Range
    maxCount(): Number {
        var maxCount = this.allProducts[0].count
        this.allProducts.forEach(element => {
            if (maxCount < element.count) { maxCount = element.count; }
        });
        return maxCount;
    }
    getSelectedCountRangeObservable(): BehaviorSubject<{minValue: Number}> {
        return this.selectCountRangeObservable;
    }
    setMinCountRange(minCount: Number) {
        this.selectedCountRange.minValue = minCount;
        this.selectCountRangeObservable.next(this.selectedCountRange);
        this.sortFilterProducts();
    }
    // Price Range
    maxPrice(): Number {
        var maxPrice = this.allProducts[0].price;
        this.allProducts.forEach(element => {
            if (maxPrice < element.price) { maxPrice = element.price; }
        });
        return maxPrice;
    }
    minPrice(): Number {
        var minPrice = this.allProducts[0].price;
        this.allProducts.forEach(element => {
            if (minPrice > element.price) { minPrice = element.price; }
        });
        return minPrice;
    }
    getSelectedPriceRangeObservable(): BehaviorSubject<{minValue: Number, maxValue: Number}> {
        return this.selectPriceRangeObservable;
    }
    setPriceRange(minPrice: Number, maxPrice: Number) {
        this.selectedPriceRange.minValue = minPrice;
        this.selectedPriceRange.maxValue = maxPrice;
        this.selectPriceRangeObservable.next(this.selectedPriceRange);
        this.sortFilterProducts();
    }
    // Pagination
    getAllPaginationTypesObservable(): BehaviorSubject<Number[]> {
        return this.allPaginationTypesObservable;
    }
    getSelectedPaginationTypeObservable(): BehaviorSubject<Number> {
        return this.selectedPaginationTypeObservable;
    }
    selectPaginationType(paginationType: Number) {
        this.selectedPaginationType = paginationType;
        this.selectedPaginationTypeObservable.next(this.selectedPaginationType);
    }
    // Products
    getAllProductsObservable(): BehaviorSubject<Product[]> {
        return this.allProductsObservable;
    }
    getSortedFilteredProducts(): BehaviorSubject<Product[]> {
        return this.sortedProductsObservable;
    }
    private sortFilterProducts() {
        var tempSortedProducts = this.allProducts.sort((product1, product2) => {
            switch (this.selectedSortingType.id) {
                case 0: //Price Low to top
                    return (product1.price < product2.price) ? 1 
                    : (product1.price > product2.price) ? - 1 
                    : 0
                case 1: //Price Top to low
                    return (product1.price > product2.price) ? 1 
                    : (product1.price < product2.price) ? - 1 
                    : 0
                case 2: //Name Ascending
                    return (product1.name > product2.name) ? 1 
                    : (product1.name < product2.name) ? -1 
                    : 0;
                case 3: //Name Descending
                    return (product1.name < product2.name) ? 1 
                    : (product1.name > product2.name) ? -1 
                    : 0;
                default: return 0;
            }
        });
        this.sortedProducts = tempSortedProducts.filter((element, index, array) => {
            // Check Searching Word
            if (this.searchingWord != '') {
                if (!(element.name == this.searchingWord)) {
                    return false;
                }
            }
            // Check Category
            if (this.allCategories.has(element.category)) {
                // We have this category
                if (this.allCategories.get(element.category) == false) {
                    // Category disabled
                    return false;    
                }
            } else {
                // We don't have this category
                return false;
            }
            //Check Count
            if (!(element.count >= this.selectedCountRange.minValue)) {
                return false;
            }
            //Check Price
            if (!(element.price >= this.selectedPriceRange.minValue 
                && element.price <=this.selectedPriceRange.maxValue)) {
                return false;
            }

            return true;
        });
        this.sortedProductsObservable.next(this.sortedProducts);
    }
}