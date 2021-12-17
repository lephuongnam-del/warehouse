import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Bill } from 'src/app/models/bill.model';
@Component({
  selector: 'app-view-bill-detail',
  templateUrl: './view-bill-detail.component.html',
  styleUrls: ['./view-bill-detail.component.css']
})
export class ViewBillDetailComponent implements OnInit {
  id: number;
  bill: Bill;
  products: Product[];
  received_date: string;
  constructor(private route:ActivatedRoute,
    private billService:BillService,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.billService.fetchById(this.id).subscribe((res) => {
      this.bill = res as any;
      this.received_date = res["received_date"]
      this.products = res["products"];
      console.log(this.bill);
    });
  }

}
