import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Warehouse } from 'src/app/models/warehouse.model';
import { ProductService } from 'src/app/services/product.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product = new Product ();
  warehouses: Warehouse[] = [];
  warehouseId;

  name:string;
  buy_price:number;
  sell_price:number;
  constructor(
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {  
  }

  saveProduct(formData) {
    console.log(formData)
    this.service.addProduct(formData).subscribe((res) => {
     // this.router.navigate(['/dashboard/products']);
     console.log(res)
    });

  }
}
