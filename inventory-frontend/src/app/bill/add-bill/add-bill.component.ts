import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Bill } from 'src/app/models/bill.model';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {
  products: Product[];
  selectedProducts: any[];
  bill: Bill;
  constructor(private productService:ProductService,
              private billService:BillService) { }

  ngOnInit(): void {
    this.bill = new Bill();
    this.selectedProducts = [];
    this.productService.fetchAllProducts().subscribe((res) => {
      this.products = res['list'] as any;
    });
  }
  onCheckboxChange(event) {
    var product = { 
      product:event.target.value, 
      qty:1 
    }; 
    if (event.target.checked) {
      this.selectedProducts.push(product);
    } else {
      var i = 0;
      this.selectedProducts.forEach((product) => {
        if(product.product == event.target.value) {
          delete this.selectedProducts[i];
        } else {
          i++;
        }
      });
    }
    console.log(this.selectedProducts);
  }
  addBill(value){
    // value["products"] = this.selectedProducts;
    // value["received_date"] = value["receivedDate"];
    value["bill_details_to_add"] = this.selectedProducts;
    console.log(value);
    this.billService.addBills(value).subscribe(res => console.log(res));
  }
}
