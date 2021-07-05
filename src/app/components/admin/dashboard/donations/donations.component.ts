import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../nav-bar/nav-bar.service';
import {DonationService} from '../../../services/Donation/donation.service';
import {Donation} from '../../../models/Donation';
import {News} from '../../../models/News';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  donations: Donation[] = [];


  constructor(public nav: NavBarService, private donationService: DonationService) {
    this.nav.hide();
    this.donations = this.donationService.getDonation();
    console.log(this.donations);
  }

  ngOnInit(): void {

  }
  OnDelete(n: Donation)
  {
    this.donationService.delete(n);
  }
}
