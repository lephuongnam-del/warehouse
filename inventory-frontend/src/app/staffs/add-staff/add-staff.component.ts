/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-05 03:12:11
 * @modify date 2020-11-05 03:12:11
 * @desc Add user
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gender } from 'src/app/models/gender.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';
import { staff } from 'src/app/models/staff.model';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  staff: staff;

  constructor(
    private manageUserService: ManageUserService,
    public loadingService: LoadingService,
    private router: Router
  ) {
    // this.initForm();
  }

  ngOnInit(): void {
    this.staff = new staff();
  }

  submitForm() {
    // this.submitted = true;
    // if (this.userForm.valid) this.addUser(this.userForm.value);
  }

  addStaff(formData) {
    console.log(formData)
  }
}
