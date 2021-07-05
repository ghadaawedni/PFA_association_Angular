import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../nav-bar/nav-bar.service';
import {AuthService} from '../../services/auth/auth.service';
import {TokenStorageService} from '../../services/auth/token-storage.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  info: any;
  isLoggedIn = false;
  authority: string;
  roles: string[] = [];
  form: any =  {};
  constructor(private httpClient: HttpClient,  public nav: NavBarService, public authService: AuthService,
              private tokenStorage: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
    this.nav.hide();
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
