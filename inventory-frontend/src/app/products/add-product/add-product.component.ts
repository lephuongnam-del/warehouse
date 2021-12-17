import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Data } from 'src/app/models/data.model';
import { Product } from 'src/app/models/product.model';
import { Warehouse } from 'src/app/models/warehouse.model';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common'
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product = new Product ();
 
  data:Data;
  product_Name:string;
  buy_price:number;
  sell_price:number;
  qty:number;
  constructor( private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) { }

  ngOnInit(): void {  
    this.route.params.forEach((params: Params) => {
      // this.data = this.dataService.getSingleWarehouse(+params['id'])
      // console.log(this.data)
      this.data
    })
  }

  saveProduct(formData) {
    // this.data.product.push(formData)
    // this.location.back()
    console.log(formData);
    this.productService.addProduct(formData).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboard/product_list/1']);
    });
    // this.dataService.updateEvent( this.data)
    // this.service.addProduct(formData).subscribe((res) => {
    //   alert('add successful')
    //   this.router.navigate(['/dashboard/products']);
    //  console.log(res)
    // });

  }
}
