import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductsMenuComponent } from './products-menu/products-menu.component';
import { OrdersMenuComponent } from './orders-menu/orders-menu.component';

import { Ng5SliderModule } from 'ng5-slider';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from 'src/services/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import { BaseNavigationComponent } from './base-navigation/base-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';
import { ProductsTableComponent } from './products-table/products-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    ProductsComponent,
    ProductComponent,
    CategoryComponent,
    ProductsMenuComponent,
    OrdersMenuComponent,
    MainDashboardComponent,
    OrdersComponent,
    OrderComponent,
    BaseNavigationComponent,
    OrdersDashboardComponent,
    ProductsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule, 
    MatCheckboxModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
