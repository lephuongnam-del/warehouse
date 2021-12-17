import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Data } from 'src/app/models/data.model';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
//import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      this.productService.fetchAllProducts().subscribe(data => this.products=data['list'])
    })
      // this.products = this.dataService.getData();
      // this.products = this.products.filter((fd) => {
      //   return fd.warehouse_id == id;
      // })
   
  }

  navigate(): void {
    this.router.navigate(['/dashboard/addproduct']);
  }
}
