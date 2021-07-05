import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {Donation} from '../../models/Donation';
import {Events} from "../../models/Events";

@Injectable({
  providedIn: 'root'
})

export class DonationService {
  constructor(private httpClient: HttpClient, private router: Router) {

  }

  donations: Donation[] = [];

  getDonation(){

    this.donations = [];
    this.httpClient
      .get<any>('http://localhost:8081/donation/getDonations')
      .subscribe((data) => {
        data.map(dt => {
          this.donations.push(dt);
        });
      });
    return this.donations;
  }

addDonation(don: Donation) {
    this.httpClient
      .post<any>('http://localhost:8081/donation/add', don)
      .subscribe( (  ) => {
          window.location.reload();
        }, (error) => {
          if (error.status === 400){
            console.log('error 400 !');
          }else if (error.status === 404){
            console.log('data invalid');
          }
        }
      );
  }
  delete(ev: Donation){

    return this.httpClient.delete<any>('http://localhost:8081/donation/delete/' + ev.don_id)
      .subscribe(data => {
        window.location.reload();
      });
  }
}
