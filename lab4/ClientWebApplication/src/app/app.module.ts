import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MainShopComponentComponent } from './main-shop-component/main-shop-component.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { HeaderShopComponent } from './header-shop/header-shop.component';
import { SearchSortingComponent } from './search-sorting/search-sorting.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MainShopComponentComponent,
    AdvertiseComponent,
    HeaderShopComponent,
    SearchSortingComponent,
    FiltersComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
