import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-add-actualites',
  templateUrl: './add-actualites.component.html',
  styleUrls: ['./add-actualites.component.css']
})
export class AddActualitesComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
