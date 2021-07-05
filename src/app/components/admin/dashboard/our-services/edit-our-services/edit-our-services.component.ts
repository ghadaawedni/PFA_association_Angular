import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-edit-our-services',
  templateUrl: './edit-our-services.component.html',
  styleUrls: ['./edit-our-services.component.css']
})
export class EditOurServicesComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
