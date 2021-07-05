import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-add-evenements',
  templateUrl: './add-evenements.component.html',
  styleUrls: ['./add-evenements.component.css']
})
export class AddEvenementsComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
