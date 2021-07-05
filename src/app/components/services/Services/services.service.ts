import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Services} from '../../models/Services';
import {News} from '../../models/News';
import {not} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  x = false;
  service: Services[] = [];
  constructor(private httpClient: HttpClient, private router: Router) {

  }

  change()
  {
    console.log(this.x);
    this.x= !this.x;
  }

  getCaller(){
    return this.x;
  }

  addServices(service: Services){
    this.httpClient
      .post<any>('http://localhost:8081/services/add', service)
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

 loadAllService(){
  this.service = [];

  this.httpClient
    .get('http://localhost:8081/services/getServices')
    .subscribe( ( data ) => {
      // @ts-ignore
      data.map( dt => {
          this.service.push(dt);
      });
    });
  console.log(this.service.length);
  return this.service;
}


  loadPublicServices(){
    this.service = [];

    this.httpClient
      .get('http://localhost:8081/services/getServices')
      .subscribe( ( data ) => {
        // @ts-ignore
        data.map( dt => {
          if ( dt.stateService === 'publicService')
          {
            this.service.push(dt);
          }
        });
      });
    return this.service;
  }

  loadPrivateServices(){
    this.service = [];

    this.httpClient
      .get('http://localhost:8081/services/getServices')
      .subscribe( ( data ) => {
        // @ts-ignore
        data.map( dt => {
          if ( dt.stateService === 'privateService')
          {
            this.service.push(dt);
          }
          console.log('ok');
        });
      });
    return this.service;
  }
  delete(services: Services){

    console.log(services.service_id);
    return this.httpClient.delete<any>('http://localhost:8081/services/delete/' + services.service_id)
      .subscribe(data => {
        window.location.reload();
      });
  }
}
