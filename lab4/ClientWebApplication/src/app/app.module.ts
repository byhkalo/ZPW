import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MainShopComponentComponent } from './main-shop-component/main-shop-component.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { HeaderShopComponent } from './header-shop/header-shop.component';
import { SearchSortingComponent } from './search-sorting/search-sorting.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import { OrderComponent } from './order/order.component';
import { BasketProductComponent } from './basket-product/basket-product.component';
import { ProductsService } from 'src/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MainShopComponentComponent,
    AdvertiseComponent,
    HeaderShopComponent,
    SearchSortingComponent,
    FiltersComponent,
    ProductComponent,
    BasketComponent,
    OrderComponent,
    BasketProductComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [
    AppComponent,
    ProductsComponent,
    MainShopComponentComponent,
    AdvertiseComponent,
    HeaderShopComponent,
    SearchSortingComponent,
    FiltersComponent,
    ProductComponent]
})
export class AppModule { }
