import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../nav-bar/nav-bar.service';
import {MemberService} from '../services/Member/member.service';
import {Member} from '../models/Member';
import {NewsService} from '../services/news/news.service';
import {News} from '../models/News';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i = 1;
 members: Member [] = [];
 news: News [] = [];
  constructor( public nav: NavBarService, private memberService: MemberService, private newsService: NewsService) {
  }
  ngOnInit(): void {
    this.nav.show();
    this.members = this.memberService.getMembers();
    this.news = this.newsService.getNews();

  }

}
