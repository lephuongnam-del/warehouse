import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  orders: Order[];
  id: number;
  constructor(private orderService: OrderService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.orderService.fetchOrders().subscribe((res) =>{
      this.orders = res as any;
      console.log(this.orders);
    });
  }

}
