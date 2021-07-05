import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';
import {ServicesService} from '../../services/Services/services.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Services} from '../../models/Services';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  addForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email : ['', Validators.required],
    civilStatus : ['', Validators.required],
    job : ['', Validators.required],
    typeService : ['', Validators.required],
    otherService : ['', Validators.required],
    emptyTime : ['', Validators.required],
    stateService : ['', Validators.required]
  });
  constructor(public nav: NavBarService, private service: ServicesService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.nav.show();
  }
  addService()
  {
    const ser = new Services(this.addForm.value.firstName, this.addForm.value.lastName, this.addForm.value.phone, this.addForm.value.email,
      this.addForm.value.civilStatus, this.addForm.value.job, this.addForm.value.typeService, this.addForm.value.otherService, this.addForm.value.emptyTime,
      this.addForm.value.stateService);
    console.log(ser);
    this.service.addServices(ser);
  }


}
