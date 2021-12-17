import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { StaffService } from 'src/app/services/staff.service';
import { staff } from 'src/app/models/staff.model';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-order-detail',
  templateUrl: './view-order-detail.component.html',
  styleUrls: ['./view-order-detail.component.css']
})
export class ViewOrderDetailComponent implements OnInit {
  location_x: number;
  location_y: number;
  id: number;
  products: Product[];
  order: Order;
  staff: staff;
  warehouse: Supplier;
  constructor(private route:ActivatedRoute,
              private orderService:OrderService,
              private staffService:StaffService,
              private warehouseService:SupplierService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.fetchById(this.id).subscribe((res) => {
      console.log(res);
      this.order = res as any;
      this.products = res["order_detail"];
      this.location_x = res["location"]["geo_location_x"];
      this.location_y = res["location"]["geo_location_y"];
      this.staffService.fetchById(this.order.staff).subscribe ((res) => {
        this.staff = res as any;
      });
      this.warehouseService.fetchById(this.order.warehouse).subscribe ((res) => {
        this.warehouse = res as any;
      });
    }); 
  }

}
