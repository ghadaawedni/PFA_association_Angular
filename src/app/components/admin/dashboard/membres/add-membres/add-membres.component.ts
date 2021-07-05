import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-add-membres',
  templateUrl: './add-membres.component.html',
  styleUrls: ['./add-membres.component.css']
})
export class AddMembresComponent implements OnInit {

  constructor(public nav: NavBarService) {
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
