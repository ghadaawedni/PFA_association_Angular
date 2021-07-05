import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-edit-donations',
  templateUrl: './edit-donations.component.html',
  styleUrls: ['./edit-donations.component.css']
})
export class EditDonationsComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
