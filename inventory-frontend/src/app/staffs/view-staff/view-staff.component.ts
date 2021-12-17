import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier.model';
import { DataService } from 'src/app/services/data.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { StaffService } from 'src/app/services/staff.service';
import { staff } from 'src/app/models/staff.model';


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  listFromApi: Object;
  staffs: any[] = [];

  constructor(
    private dataService:DataService,
    private router: Router,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    
   
    this.staffService.fetchAllStaff().subscribe(data => this.staffs=data['list'])
    
    // const resultArray = Object.keys(this.supplierService.fetchAllSuppliers(1)).map(index => {
    //   let person = this.supplierService.fetchAllSuppliers(1)[index];
    //   return person;
    // });
    // console.log(resultArray)

  }
 
}
