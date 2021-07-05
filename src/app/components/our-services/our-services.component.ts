import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services/Services/services.service';
import {Services} from '../models/Services';
import {TokenStorageService} from '../services/auth/token-storage.service';
import {Params, Router} from '@angular/router';
import {NavBarService} from '../nav-bar/nav-bar.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  myParam: string;
  info: any;
  isLoggedIn = false;
  x = false;
  authority: string;
  roles: string[] = [];
  servicesPublic: Services[] = [];
  servicesPrivate: Services[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(private service: ServicesService, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router,
              public nav: NavBarService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicesPublic = this.service.loadPublicServices();
    this.x = this.service.getCaller();
    if (this.x) {
      this.servicesPrivate = this.service.loadPrivateServices();
    }
  }

  getX(){
    this.servicesPrivate = this.service.loadPrivateServices();
    this.x=this.service.getCaller();
  }

}
