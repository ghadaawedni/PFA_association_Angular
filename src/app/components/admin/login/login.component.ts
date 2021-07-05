import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TokenStorageService } from '../../services/auth/token-storage.service';
import { AuthLoginInfo } from '../../models/login-info';
import {Router} from '@angular/router';
import {NavBarService} from '../../nav-bar/nav-bar.service';
import {ToastrService} from 'ngx-toastr';
import {ServicesService} from '../../services/Services/services.service';
import {Services} from '../../models/Services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage: '';
  form: any =  {};
  isLoginFailed = false;
  authority: string;
  private  roles: string [];
  info: any;
  privattService: Services[] = [];
  private loginInfo: AuthLoginInfo;
  caller = false;

  constructor(private service: ServicesService, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router,
              public nav: NavBarService, private toastr: ToastrService) { }

  ngOnInit(): void{
    this.nav.show();
   }
  showToaster1(){
    this.toastr.warning('Sorry', 'You are not an admin',
    {
      timeOut: 3500,
      progressBar: true,
      positionClass: 'toast-top-right',
    });
  }
  showToaster2(){
    this.toastr.warning('Sorry', 'You are not registred',
      {
        timeOut: 3500,
        progressBar: true,
        positionClass: 'toast-top-right',
      });
  }
  showToaster3(){
    this.toastr.success('Congrats', 'You are logged in',
      {
        timeOut: 3500,
        progressBar: true,
        positionClass: 'toast-top-right',
      });
  }
  showToaster4(){
    this.toastr.warning('Sorry', 'You are not a beneficiary',
      {
        timeOut: 3500,
        progressBar: true,
        positionClass: 'toast-top-right',
      });
  }

  onSubmit()
  {
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password );

    this.authService.signIn(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getAuthorities();
        console.log(this.roles.toString());
        if (this.roles.toString() === 'ROLE_ADMIN')
        {
           this.router.navigate(['/dashboard']);
           this.showToaster3();
        }
        else if (this.roles.toString() === 'ROLE_BENEFICIARY')
        {
            this.service.change();
            this.router.navigate(['/services' ]);
            this.showToaster3();
          }
        else {
          this.showToaster1();
        }
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.showToaster2();
      }
    );
 }

}
