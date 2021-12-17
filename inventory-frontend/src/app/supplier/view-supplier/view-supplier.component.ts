import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier.model';
import { DataService } from 'src/app/services/data.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css'],
})
export class ViewSupplierComponent implements OnInit {
  listFromApi: Object;
  suppliers: any[] = [];
  constructor(
    private dataService:DataService,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    
    this.supplierService.fetchAllSuppliers(1).subscribe(
      data => {console.log(data);this.suppliers = data["list"];},
      error => console.log(error)
    );
    console.log(this.supplierService.fetchAllSuppliers(1))
    console.log(this.supplierService.fetchById(1))
    // const resultArray = Object.keys(this.supplierService.fetchAllSuppliers(1)).map(index => {
    //   let person = this.supplierService.fetchAllSuppliers(1)[index];
    //   return person;
    // });
    // console.log(resultArray)

  }
 
}
