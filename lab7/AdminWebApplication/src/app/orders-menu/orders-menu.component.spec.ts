import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMenuComponent } from './orders-menu.component';

describe('OrdersMenuComponent', () => {
  let component: OrdersMenuComponent;
  let fixture: ComponentFixture<OrdersMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
