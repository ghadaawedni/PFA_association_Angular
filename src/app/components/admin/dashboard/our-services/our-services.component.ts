import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../nav-bar/nav-bar.service';
import {ServicesService} from '../../../services/Services/services.service';
import {Services} from '../../../models/Services';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})

export class OurServicesListComponent implements OnInit {
  x = false;
  services: Services [] = [];
  constructor(public nav: NavBarService, private serviceService: ServicesService) {
    this.x = this.serviceService.getCaller();
    this.nav.hide();
  }

  ngOnInit(): void {
    this.services = this.serviceService.loadAllService();
  }
  show()
  {
    this.x = true;
  }
  OnDeletee(n: Services)
  {
    console.log(n);
    //  const n = this.news[i];
    this.serviceService.delete(n);
  }
}
