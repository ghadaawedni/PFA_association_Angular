import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-edit-evenements',
  templateUrl: './edit-evenements.component.html',
  styleUrls: ['./edit-evenements.component.css']
})
export class EditEvenementsComponent implements OnInit {
  
  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
