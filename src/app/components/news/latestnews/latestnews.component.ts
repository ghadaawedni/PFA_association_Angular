import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';
import {NewsService} from '../../services/news/news.service';
import {News} from '../../models/News';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {
  news: News [] = [];
  constructor(public nav: NavBarService, private newsService: NewsService) { }
  // events: Array<{id: number, text: string}> = [
  //   {id: 1, text: 'التظاهرات'},
  //   {id: 2, text: 'التظاهرات القادمة'},
  //   {id: 3, text: 'كفالة يتيم'},
  // ];
  evName: string;
  ngOnInit(): void {
    this.nav.show();
    // @ts-ignore
    this.news = this.newsService.getNews();
    // console.log('heey' + this.news);
  }

changed()
{
 console.log('clicked');
}




}
