import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {News} from '../../models/News';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  status;
  mynews: News [] = [];

  constructor(private httpClient: HttpClient) {
  }


  addNew(news: News) {
    this.httpClient
      .post<any>('http://localhost:8081/news/addNew', news)
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


  getNews() {
    this.mynews = [];
    this.httpClient
      .get<any>('http://localhost:8081/news/getNews')
      .subscribe((data) => {
        data.map(dt => {
          this.mynews.push(dt);
        });
      });
    return this.mynews;
  }

  delete(news: News){

    return this.httpClient.delete<any>('http://localhost:8081/news/delete/' + news.news_id)
      .subscribe(data => {
        window.location.reload();
      });
  }
}
