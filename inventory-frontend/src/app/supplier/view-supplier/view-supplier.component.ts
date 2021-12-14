import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css'],
})
export class ViewSupplierComponent implements OnInit {

  suppliers: any[] = [];
  constructor(
    private dataService:DataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.suppliers = this.dataService.getData();
  }
 
}
