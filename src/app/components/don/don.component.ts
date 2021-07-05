import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';
import {DonationService} from '../services/Donation/donation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Donation} from '../models/Donation';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {

  addForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    LastName: ['', Validators.required],
    phone: ['', Validators.required],
    email : ['', Validators.required],
    address : ['', Validators.required],
    donation : ['', Validators.required],
    SugDonation : ['', Validators.required],
  });
  constructor(public nav: NavBarService, private donationService: DonationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nav.show();
  }

  addDonation()
  {
    const don = new Donation(this.addForm.value.firstName, this.addForm.value.LastName, this.addForm.value.phone, this.addForm.value.email
    , this.addForm.value.address, this.addForm.value.donation, this.addForm.value.SugDonation);
    console.log(don);
    this.donationService.addDonation(don);
  }




}
