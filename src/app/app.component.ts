import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './components/services/auth/token-storage.service';
import {NavBarService} from './components/nav-bar/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public nav: NavBarService) { }

  ngOnInit() {
  }
}
