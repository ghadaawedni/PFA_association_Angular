import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-edit-demandes',
  templateUrl: './edit-demandes.component.html',
  styleUrls: ['./edit-demandes.component.css']
})
export class EditDemandesComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
