import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProductsTableDataSource, ProductsTableDS } from './products-table-datasource';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})

export class ProductsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dataSource: ProductsTableDataSource;
  dataSource: ProductsTableDS;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'image', 'name', 'price', 'count', 'promotion'];

  ngOnInit() {
    // this.dataSource = new ProductsTableDataSource(this.paginator, this.sort);
    this.dataSource = new ProductsTableDS(this.paginator, this.sort);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selectRow(row) {
    console.log(row);
  }
}
