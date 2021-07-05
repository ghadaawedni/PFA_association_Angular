import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-add-our-services',
  templateUrl: './add-our-services.component.html',
  styleUrls: ['./add-our-services.component.css']
})
export class AddOurServicesComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
