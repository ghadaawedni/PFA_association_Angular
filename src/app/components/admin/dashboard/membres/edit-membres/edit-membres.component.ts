import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-edit-membres',
  templateUrl: './edit-membres.component.html',
  styleUrls: ['./edit-membres.component.css']
})
export class EditMembresComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
