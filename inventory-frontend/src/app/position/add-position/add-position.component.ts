import { Component, OnInit } from '@angular/core';
import { position } from 'src/app/models/position.model';
import { PositionService } from 'src/app/services/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent implements OnInit {
  position = new position();
  constructor(private positionService: PositionService,
              private router: Router) { }
 
  name: string;
  ngOnInit(): void {

  }
  savePosition(formData) {
    console.log("running");
    console.log(formData);
    this.positionService.addPosition(formData).subscribe(res => this.router.navigate(['/dashboard/position']));
  }
}
