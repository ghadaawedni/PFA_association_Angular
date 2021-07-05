import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../nav-bar/nav-bar.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {News} from '../../../models/News';
import { NewsService} from '../../../services/news/news.service';


@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']

})
export class ActualitesComponent implements OnInit {
  news: News [] = [];
  x = false;
  today: any;
  addForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    url : ['', Validators.required],
  });
  constructor(   public nav: NavBarService, private fb: FormBuilder, private newsService: NewsService) {
    this.nav.hide();
  }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }
  show()
  {
    this.x = true;
  }
  addNew(){
    this.x = false;
    const str = this.addForm.value.url;
    console.log(str);
    const splitted = str.split('\\', 3);
    console.log(splitted[2]);
    const news = new News(this.addForm.value.title, '2021-09-29', this.addForm.value.description, splitted[2]);
    console.log(news);
    this.newsService.addNew(news);
  }
   OnDelete(n: News)
   {
     this.newsService.delete(n);
   }
  OnUpdate(n: News){
    console.log(n);
  }

}
