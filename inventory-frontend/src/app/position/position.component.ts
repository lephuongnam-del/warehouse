import { Component, OnInit } from '@angular/core';
import { position } from '../models/position.model';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  constructor(private positionService: PositionService) { }
  positions: position[];
  ngOnInit(): void {
    this.positionService.fetchAllPosition().subscribe((res) => { this.positions = res['list'];});
  }

}
