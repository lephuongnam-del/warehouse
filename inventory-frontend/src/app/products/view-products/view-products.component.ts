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
  products: Data;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      let id = params['id'];

      this.products = this.dataService.getSingleWarehouse(+params['id'])
      // this.products = this.dataService.getData();
      // this.products = this.products.filter((fd) => {
      //   return fd.warehouse_id == id;
      // })

      console.log(this.products)
    })

   
  }

  navigate(): void {
    this.router.navigate(['/dashboard/addproduct']);
  }
}
