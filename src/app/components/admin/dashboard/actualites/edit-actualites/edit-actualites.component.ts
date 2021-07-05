import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-edit-actualites',
  templateUrl: './edit-actualites.component.html',
  styleUrls: ['./edit-actualites.component.css']
})
export class EditActualitesComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
