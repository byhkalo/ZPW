import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ProductsTableDataSource, ProductsTableDS, ProductsTableItem } from './products-table-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import {MAT_DIALOG_DATA} from '@angular/material';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductComponent } from '../product/product.component';
import { Product } from 'src/models/product.model';


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
  displayedColumns = ['id', 'image', 'name', 'price', 'count', 'select'];
  // Promotion
  selection = new SelectionModel<ProductsTableItem>(true, []);
  promotionValue: number = 0;
  promotionDuration: number = 0;
constructor(public dialog: MatDialog) {}
  ngOnInit() {
    // this.dataSource = new ProductsTableDataSource(this.paginator, this.sort);
    this.dataSource = new ProductsTableDS(null, this.paginator, this.sort);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selectRow(row: ProductsTableItem) {
    console.log(row);
    let product = { id: 12, name: 'iPhone #1',
      category: 'Smartphones', 
      description: 'Some Long descroiptiong skdm fd dc dhsfkjsdfndskjfdsf sdkjfds fkds',
      count: 39, price: 230, imageUrl: 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg'}
    const dialogRef = this.dialog.open(ProductComponent, 
      { 
        width: '1000px', 
        height: '650px',
        data: product
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  openPromotionDialog() {
    const dialogRef = this.dialog.open(PromotionDialog, {width: '700px', height: '550px',
        data: {
          selections: this.selection.selected, 
          value: this.promotionValue, 
          duration: this.promotionValue
        }
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'promotion-dialog',
  templateUrl: 'promotion-dialog.html',
  styleUrls: ['promotion-dialog-style.css'],
})
export class PromotionDialog {

  displayedColumns = ['id', 'name', 'price', 'count'];
  dataSource: ProductsTableDS
  @ViewChild(MatPaginator) paginator: MatPaginator;

  value = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.selections);
    this.dataSource = new ProductsTableDS(data.selections, this.paginator, null);
  }

  formatLabel(value: number | null) {
    return value ? value + '%' : 0 + '%';
  }
  
}