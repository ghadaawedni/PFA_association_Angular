import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-add-demandes',
  templateUrl: './add-demandes.component.html',
  styleUrls: ['./add-demandes.component.css']
})
export class AddDemandesComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
