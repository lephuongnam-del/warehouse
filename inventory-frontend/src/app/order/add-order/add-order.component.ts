import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { Order } from 'src/app/models/order.model';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { staff } from 'src/app/models/staff.model';
import { mapDetailService } from 'src/app/services/map-service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  warehouse_list: Supplier[] =[];
  product_list: Product[];
  addOrderForm:FormGroup;
  // staffs: 
  selectWarehouse:any ='-1';
  selectStaff:any = '-1';
  order: Order;
  staff_list: staff[];
  lat: number;
  lng: number;
  // chosenProduct: Object = {
  //   product: -1,
  //   qty: -1
  // };
  orderDetails: Array<any> = [];
  constructor(private warehouseService: SupplierService, 
              private productService: ProductService, 
              private fb:FormBuilder,
              private staffService: StaffService,
              private mapService: mapDetailService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
    this.order = new Order();
    this.warehouseService.fetchAllSuppliers(1).subscribe((res:any )=>
    { 

      this.warehouse_list = res['list'];
     
      console.log( this.warehouse_list );
    });
    this.productService.fetchAllProducts().subscribe((res:any) => {
      this.product_list = res['list']; // product list day ne ok
      console.log(this.product_list)
    });
    this.staffService.fetchAllStaff().subscribe((res:any) => {
      this.staff_list = res['list'];
    });
    this.addOrderForm = this.fb.group({
      moneynumber: ['', Validators.required],
      warehouse:['', Validators.required],
      products: this.fb.array([], [Validators.required])
     
    })
    this.order.location["geo_location_x"] = 10.762622;
    this.order.location["geo_location_y"] = 106.660172;
    this.mapService.changeCoordinateLat(10.762622);
    this.mapService.changeCoordinateLng(106.660172);
    this.mapService.currentCoordinatelat.subscribe(lat => (
      this.lat = lat));
    this.mapService.currentCoordinatelng.subscribe(lng => (
      this.lng= lng));
  }
  onChosenWarehouse(event:any ) {
    console.log( event.target.value);
    this.selectWarehouse = event.target.value;
    // populate neighborhoodlist based on chosenCity
  }
  onChosenStaff(event:any ) {
    console.log( event.target.value);
    this.selectStaff = event.target.value;
    // populate neighborhoodlist based on chosenCity
  }
  onCheckboxChange(event:any){
    console.log( event.target.checked);
    const products: FormArray = this.addOrderForm.get('products') as FormArray;
    var product = { 
      product:event.target.value, 
      qty:1 
   }; 
   
    console.log(event.target.value)
    if (event.target.checked) {
      this.orderDetails.push(product);
      products.push(new FormControl(event.target.value));
      
    } else {
      let i: number = 0;
      products.controls.forEach((item: FormControl) => {
        if (item.value == event.target.value) {
          // this.orderDetails.splice(i, 1);
          delete this.orderDetails[i];
          return;
        }
        i++;
      });
    }
   
  }
  save(value) {
    value.warehouse = this.selectWarehouse;
    value.staff = this.selectStaff;
    value.directions = "custom field";
    value.order_details_to_add = this.orderDetails;
    value.location = {};
    value.location.geo_location_x = this.lat;
    value.location.geo_location_y = this.lng;
    console.log(value)
    this.orderService.addOrders(value).subscribe(res => console.log(res));
    this.router.navigate(['/dashboard/vieworder']);
  }
}
