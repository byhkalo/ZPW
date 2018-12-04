import { Injectable, OnInit } from '@angular/core';
import { ProductsService } from './product.service';
import { Product } from 'src/models/product';
import { BehaviorSubject } from 'rxjs';
import { all } from 'q';

@Injectable({ providedIn: 'root' })
export class BasketService {

    private basketProducts: Map<Number, Product> = new Map();
    private basketProductsObservable = new BehaviorSubject(Array.from(this.basketProducts.values()));

    private productsCount: number = 0;
    private productsCountObservable = new BehaviorSubject(0);

    private productsSum: number = 0;
    private productsSumObservable = new BehaviorSubject(0);

    private allProducts: Array<Product> = [];

    constructor(private productsService: ProductsService) {
        this.productsService.getAllProductsObservable().subscribe( allProducts => {
            console.log("Get PRODUCTS From Product service to BasketService");
            this.allProducts = allProducts;
        })
    }

    getbasketProductsObservable(): BehaviorSubject<Array<Product>> {
        return this.basketProductsObservable;
    }
    getProductsCountObservable(): BehaviorSubject<number> {
        return this.productsCountObservable;
    }
    getProductsSumObservable(): BehaviorSubject<number> {
        return this.productsSumObservable;
    }

    addOne(product: Product) {
        if (this.basketProducts.has(product.id) == false) {
            let newBasketProduct = { id: product.id,
                name: product.name,
                category: product.category,
                count: 0,
                price: product.price,
                imageUrl: product.imageUrl };
            this.basketProducts.set(newBasketProduct.id, newBasketProduct);
        }
        if (product.count > 0) {
            this.basketProducts.get(product.id).count += 1
            product.count -= 1
            this.recalculateBasket()
        }
    }
    removeOne(product: Product, withDelete: Boolean) {
        if (this.basketProducts.has(product.id)) {
            this.basketProducts.get(product.id).count -= 1
            product.count += 1    
            if ((this.basketProducts.get(product.id).count == 0) && (withDelete == true)) {
                this.basketProducts.delete(product.id);
            }
        }
        this.recalculateBasket()
    }

    addOneFromBasket(product: Product) {
        var originalProductIndex = this.allProducts.findIndex(element => {
            return element.id == product.id
        });
        if (this.allProducts[originalProductIndex].count > 0) {
            product.count += 1;
            this.allProducts[originalProductIndex].count -= 1;
        }
        this.recalculateBasket()
    }
    removeOneFromBasket(product: Product) {
        if (product.count > 0) {
            product.count -= 1
            var originalProductIndex = this.allProducts.findIndex(element => {
                return element.id == product.id
            });
            this.allProducts[originalProductIndex].count += 1
        }
        this.recalculateBasket()
    }
    deleteFormBasket(product: Product) {
        if (this.basketProducts.has(product.id)) {
            let tempProduct = this.basketProducts.get(product.id);
            let originalProduct = this.allProducts.find(element => {
                return element.id == product.id;
            });
            originalProduct.count += tempProduct.count;
            tempProduct.count = 0;
            this.basketProducts.delete(product.id);
        }
        this.recalculateBasket()
    }
    private recalculateBasket() {
        var totalCount = 0;
        var totalSum = 0;
        let products = Array.from(this.basketProducts.values());
        products.forEach(product => {
            totalCount += product.count;
            totalSum += (product.count * product.price);           
        });
        this.productsCount = totalCount;
        this.productsSum = totalSum;
        this.productsCountObservable.next(this.productsCount);
        this.productsSumObservable.next(this.productsSum);
        this.basketProductsObservable.next(products);
    }
}