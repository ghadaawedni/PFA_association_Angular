import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Events} from '../../models/Events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  status;
  events: Events [] = [];

  constructor(private httpClient: HttpClient) {
  }


  addEvent(ev: Events) {
    this.httpClient
      .post<any>('http://localhost:8081/ComingEvent/addEvent', ev)
      .subscribe(() => {
          window.location.reload();
        }, (error) => {
          if (error.status === 400) {
            console.log('error 400 !');
          } else if (error.status === 404) {
            console.log('data invalid');
          }
        }
      );
  }


  getEvents() {
    this.events = [];
    this.httpClient
      .get<any>('http://localhost:8081/ComingEvent/getComingEvent')
      .subscribe((data) => {
        data.map(dt => {
          this.events.push(dt);
        });
      });
    return this.events;
  }

  delete(ev: Events){

    return this.httpClient.delete<any>('http://localhost:8081/ComingEvent/delete/' + ev.event_id)
      .subscribe(data => {
        window.location.reload();
      });
  }
}
