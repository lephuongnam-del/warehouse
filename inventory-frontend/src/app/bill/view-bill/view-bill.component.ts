import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { Bill } from 'src/app/models/bill.model';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {
  bills: Bill[];
  constructor(private billService: BillService) { }

  ngOnInit(): void {
    // this.bills = 
    this.billService.fetchBills().subscribe((res) => { 
      // console.log(res);
      this.bills = res as any;
      console.log(this.bills);
    });
  }

}
