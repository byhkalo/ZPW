import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from 'src/services/auth.guard';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';
import { ProductsTableComponent } from './products-table/products-table.component';

const routes: Routes = [
  // { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent},
  { path: "dashboard", component: OrdersDashboardComponent },
  { path: "products", component: ProductsTableComponent },
  { path: "orders", component: OrdersComponent },
  { path: "**", redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
