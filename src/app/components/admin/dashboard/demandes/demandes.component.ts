import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../nav-bar/nav-bar.service';
import {Services} from '../../../models/Services';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  x = false;
  services: Services [] = [];
  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
